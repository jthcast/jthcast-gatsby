import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDebounce from '../../customHooks/useDebounce';
import useFocus from '../../customHooks/useFocus';
import { IconSearch, IconSpinner, IconTimesCircle, IconTemplate } from '../../components/atoms/Icons';
import './Codes.scss';
import { graphql, Link, navigate, useStaticQuery } from 'gatsby';
import Layout from '../../components/atoms/Layout';
import useQuery from '../../customHooks/useQuery';

export interface CodesProps {
  excerpt?: string;
  frontmatter?: {
    date?: string;
    title?: string;
    icon?: string;
    series?: string;
    tags?: string[];
  }
  fields?: {
    slug?: string;
  }
}

const Codes = (): React.ReactElement => {
  const query = useStaticQuery(graphql`
    query AllCodes{
      allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/(content/codes)/"}, frontmatter: {visible: {eq: true}}}) {
        nodes {
          excerpt
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
            icon
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
  const codesData: Array<CodesProps> = query.allMdx.nodes;
  const { t } = useTranslation();
  const [codes, setCodes] = useState<Array<CodesProps>>(codesData);
  const queryObject = useQuery();
  const [searchInputValue, setSearchInputValue] = useState<string>(queryObject.query ? queryObject.query : '');
  const [searchInputRef, setFocus] = useFocus();
  const debounceValue = useDebounce(searchInputValue.toLowerCase(), 50);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    navigate(searchInputValue ? `?query=${encodeURIComponent(searchInputValue)}` : `/codes/`, { replace: true });
    if (!searchInputValue) {
      setCodes(codesData);
      setIsLoading(false);
      return;
    }
    const filteredCodes = codesData.filter((code) => {
      const target = code.frontmatter.title.toLowerCase().trim();
      return (
        query.toLowerCase().split(' ').every((param) => target.includes(param))
      )
    });
    setCodes(filteredCodes);
    setIsLoading(false);
  }, [codesData, searchInputValue, queryObject.query]);

  useEffect(() => {
    searchHandling();
  }, [debounceValue, searchHandling]);
  return (
    <Layout title={t('Codes.title')} description={t('Codes.description')}>
      <section className="jth-codes jth-container">
        {codesData.length === 0 && (
          <div className="jth-codes-nothing">
            <h1>{t('Codes.codeDoesntExistMessage')}</h1>
          </div>
        )}
        {codesData.length > 0 && (
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
        {!isLoading && codes.length > 0 && (
          <ul className="jth-codes-list">
            {codes.map((code) => {
              return (
                <li key={code.fields.slug}>
                  <Link to={code.fields.slug} aria-label={code.frontmatter.title}>
                    {code.frontmatter.icon && IconTemplate({ iconName: code.frontmatter.icon })}
                    <p>{code.frontmatter.title}</p>
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

export default Codes;
