import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDebounce from '../../customHooks/useDebounce';
import useFocus from '../../customHooks/useFocus';
import { IconSearch, IconSpinner, IconTimesCircle } from '../../components/atoms/Icons';
import './Codes.scss';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout';
import { Query } from '../../graphql-types';

const Codes = (): JSX.Element => {
  const query: Query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  `);
  const codes = query.allMarkdownRemark.nodes;
  const { t } = useTranslation();
  // const [codes, setCodes] = useState<Array<CodeProps>>(codesData);
  const [searchInputValue, setSearchInputValue] = useState('');
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
  const debounceValue = useDebounce(searchInputValue, 100);
  const [isLoading, setIsLoading] = useState(false);
  const searchHandling = useCallback(() => {
    setIsLoading(true);
    // const filteredCodes = codesData.filter((code) => {
    //   return (
    //     code.title?.includes(debounceValue) ||
    //     code.subTitle?.includes(debounceValue)
    //   );
    // });
    // setCodes(filteredCodes);
    setIsLoading(false);
  }, [debounceValue]);

  useEffect(() => {
    searchHandling();
  }, [debounceValue, searchHandling]);
  return (
    <Layout title={t('Codes.title')} description={t('Codes.description')}>
      <section className="jth-codes">
        <div className="jth-container">
          {codes.length === 0 && (
            <div className="jth-codes-nothing">
              <h1>{t('Codes.codeDoesntExistMessage')}</h1>
            </div>
          )}
          {codes.length > 0 && (
            <div className="jth-codes-search">
              <input
                aria-label="Search"
                className="jth-codes-search-input"
                type="text"
                value={searchInputValue}
                onChange={searchInputChangeHandling}
                onKeyDown={searchInputKeyDownHandling}
                ref={searchInputRef}
              />
              {searchInputValue && (
                <IconTimesCircle
                  onClick={clearInput}
                  className="jth-codes-search-clearIcon"
                />
              )}
              <IconSearch />
            </div>
          )}
          {isLoading && (
            <div className="jth-codes-loading">
              <IconSpinner spin />
            </div>
          )}
          {!isLoading && searchInputValue && codes.length > 0 && (
            <div className="jth-codes-searchResult">
              <p>
                {codes.length}
                {t('Common.searchResultsMessage')}
              </p>
            </div>
          )}
          {!isLoading && searchInputValue && codes.length === 0 && (
            <div className="jth-codes-nothing">
              <h1>{t('Common.searchResultDoesntExist')}</h1>
            </div>
          )}
          {/* {!isLoading && codes.length > 0 && (
            <ul className="jth-codes-list">
              {codes.map((code) => {
                return (
                  <li key={code.seq}>
                    <Link to={`/codes/${code.seq}`} aria-label={code.title}>
                      {code.icon && code.icon}
                      <p>{code.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )} */}
        </div>
      </section>
    </Layout>
  );
};

export default Codes;
