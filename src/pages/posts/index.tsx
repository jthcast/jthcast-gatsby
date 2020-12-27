import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useQuery from '../../customHooks/useQuery';
import Card, { CardInterface } from '../../components/atoms/Card';
import Chip from '../../components/atoms/Chip';
import { IconSearch, IconSpinner, IconTimesCircle } from '../../components/atoms/Icons';
import './Posts.scss';
import useDebounce from '../../customHooks/useDebounce';
import useFocus from '../../customHooks/useFocus';
import Layout from '../../components/layout';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Posts = (): JSX.Element => {
  const query = useStaticQuery(graphql`
    query AllPosts{
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            image {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                  srcWebp
                }
              }
            }
            series
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  const postsData: Array<CardInterface> = query.allMarkdownRemark.nodes;
  const [posts, setPosts] = useState<Array<CardInterface>>(postsData);
  const { t } = useTranslation();
  const tags = postsData.reduce<{ [key: string]: number }>(
    (acc, data) => {
      data.frontmatter.tags?.forEach((tagItem) => {
        acc[tagItem] = acc[tagItem] ? acc[tagItem] + 1 : 1;
      });
      return acc;
    },
    { All: postsData.length }
  );
  const queryObject = useQuery();
  const filterPosts = useCallback(() => {
    // const tagKeyword = queryObject.tag;
    // const results = posts.filter((post) => {
    //   if (tagKeyword) {
    //     return post.frontmatter.tags?.includes(tagKeyword);
    //   }
    //   return posts;
    // });
    // setPosts(results);
  }, [queryObject.tag]);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [searchInputRef, setFocus] = useFocus();
  const clearInput = () => {
    setSearchInputValue('');
    setFocus();
  };
  const searchInputKeyDownHandling = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.nativeEvent instanceof KeyboardEvent &&
      event.nativeEvent.key === 'Escape'
    ) {
      event.preventDefault();
      clearInput();
    }
  };
  const searchInputChangeHandling = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const keyword = event.currentTarget.value;
    setSearchInputValue(keyword);
  };
  const debounceValue = useDebounce(searchInputValue.toLowerCase(), 0);
  const [isLoading, setIsLoading] = useState(false);
  const searchHandling = useCallback(() => {
    setIsLoading(true);
    const filteredPosts = postsData.filter((post) => post.frontmatter.title.toLowerCase().includes(debounceValue));
    setPosts(filteredPosts);
    setIsLoading(false);
  }, [debounceValue]);

  useEffect(() => {
    filterPosts();
    setSearchInputValue('');
  }, [filterPosts]);

  useEffect(() => {
    searchHandling();
  }, [debounceValue, searchHandling]);

  return (
    <Layout title={t('Posts.title')} description={t('Posts.description')}>
      <section className="jth-posts">
        <div className="jth-container">
          {postsData.length === 0 && (
            <div className="jth-posts-nothing">
              <h1>{t('Posts.postDoesntExistMessage')}</h1>
            </div>
          )}
          {/* {tags.All > 0 && (
            <div className="jth-posts-tags">
              {Object.entries(tags).map((tagItem) => {
                return (
                  <Chip className="jth-posts-tag" ghost allowClose={false} key={tagItem[0]} onClick={filterPosts}>
                    {tagItem[0]} {tagItem[1]}
                  </Chip>
                );
              })}
            </div>
          )} */}
          {postsData.length > 0 && (
            <div className="jth-posts-search">
              <input
                aria-label="Search"
                className="jth-posts-search-input"
                type="text"
                value={searchInputValue}
                onChange={searchInputChangeHandling}
                onKeyDown={searchInputKeyDownHandling}
                ref={searchInputRef}
              />
              {searchInputValue && (
                <IconTimesCircle
                  onClick={clearInput}
                  className="jth-posts-search-clearIcon"
                />
              )}
              <IconSearch />
            </div>
          )}
          {isLoading && (
            <div className="jth-posts-loading">
              <IconSpinner spin />
            </div>
          )}
          {!isLoading && searchInputValue && posts.length > 0 && (
            <div className="jth-posts-searchResult">
              <p>{t('Common.searchResultsMessage', { what: posts.length })}</p>
            </div>
          )}
          {!isLoading && searchInputValue && posts.length === 0 && (
            <div className="jth-posts-nothing">
              <h1>{t('Common.searchResultDoesntExist')}</h1>
            </div>
          )}
          {!isLoading && posts.length > 0 && (
            <ul className="jth-posts-list">
              {posts.map((post) => {
                return (
                  <li key={post.fields.slug}>
                    <Link to={`/posts${post.fields.slug}`} aria-label={post.frontmatter.title}>
                      <Card item={post} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Posts;
