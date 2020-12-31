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
import Button from '../../components/atoms/Button';
import { navigate } from 'gatsby';

const Posts = (): React.ReactElement => {
  const query = useStaticQuery(graphql`
    query AllPosts{
      allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/(content/posts)/"}, frontmatter: {visible: {eq: true}}}) {
        nodes {
          excerpt
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
            image {
              childImageSharp {
                fluid(maxWidth: 1160, maxHeight: 500, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
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
  const postsData: Array<CardInterface> = query.allMdx.nodes;
  const [posts, setPosts] = useState<Array<CardInterface>>(postsData);
  const queryObject = useQuery();
  const [searchInputValue, setSearchInputValue] = useState<string>(queryObject.query ? queryObject.query : '');
  const [searchInputRef, setFocus] = useFocus();
  const debounceValue = useDebounce(searchInputValue.toLowerCase(), 50);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const tags = postsData.reduce<Record<string, number>>(
    (acc, data) => {
      data.frontmatter.tags?.forEach((tagItem) => {
        acc[tagItem] = acc[tagItem] ? acc[tagItem] + 1 : 1;
      });
      return acc;
    },
    {}
  );

  const tagHandling = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const tag = event.currentTarget.firstChild.firstChild.nodeValue;
    const isAdded = searchInputValue.toLowerCase().split(' ').includes(tag.toLowerCase());
    const reg = new RegExp(tag, 'gi');
    if (isAdded) {
      const tagRemovedString = searchInputValue.replace(reg, '').trim();
      setSearchInputValue(tagRemovedString);
      return;
    }
    setSearchInputValue((searchInputValue.trim() + ` ${tag}`).trim());
  };

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

  const searchHandling = useCallback(() => {
    const query = queryObject.query ? queryObject.query : ``;
    const tagColorHandling = () => {
      const tags = document.querySelectorAll(`.jth-posts-tag span`);
      tags.forEach((tag) => {
        const tagValue = tag.firstChild.nodeValue.toLowerCase();
        if (query && query.toLowerCase().split(' ').find((value) => tagValue === value)) {
          tag.classList.add(`jth-posts-tag-active`);
          return;
        }
        tag.classList.remove(`jth-posts-tag-active`);
      });
    }
    setIsLoading(true);
    navigate(searchInputValue ? `?query=${encodeURIComponent(searchInputValue)}` : `/posts/`, { replace: true });
    tagColorHandling();
    if (!searchInputValue) {
      setPosts(postsData);
      setIsLoading(false);
      return;
    }
    const filteredPosts = postsData.filter((post) => {
      const target = `${post.frontmatter.title} ${post.frontmatter.tags ? post.frontmatter.tags.join(' ') : ''}`.toLowerCase().trim();
      return (
        query.toLowerCase().split(' ').every((param) => target.includes(param))
      )
    });
    setPosts(filteredPosts);
    setIsLoading(false);
  }, [postsData, searchInputValue, queryObject.query]);

  useEffect(() => {
    searchHandling();
  }, [debounceValue, searchHandling]);

  return (
    <Layout title={t('Posts.title')} description={t('Posts.description')}>
      <section className="jth-posts jth-container">
        {postsData.length === 0 && (
          <div className="jth-posts-nothing">
            <h1>{t('Posts.postDoesntExistMessage')}</h1>
          </div>
        )}
        {tags && (
          <div className="jth-posts-tags">
            {Object.keys(tags).map((tagItem) => {
              return (
                <Button ghost lineType="none" className="jth-posts-tag" onClick={tagHandling} key={tagItem[0]}>
                  <Chip ghost allowClose={false}>
                    {tagItem}
                  </Chip>
                </Button>
              );
            })}
          </div>
        )}
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
                  <Link to={post.fields.slug} aria-label={post.frontmatter.title}>
                    <Card showContent item={post} />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </Layout>
  );
};

export default Posts;
