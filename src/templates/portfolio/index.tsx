// import React, { lazy, Suspense } from 'react';
// import { Link, useParams } from '../../../components/atoms/ErrorBoundary/node_modules/react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { IconSpinner } from '../../components/atoms/Icons';
// import ErrorBoundary from '../../components/atoms/ErrorBoundary';
// import './Portfolio.scss';
// import portfoliosData from '../../../data/PortfoliosData';
// import { postsData, PostsDataProps } from '../../../data/PostsData';
// import NoMatch from '../NoMatch';
// import Meta from '../../components/atoms/Meta';

// interface PortfolioUri {
//   seq: string;
// }

// const Portfolio = (): React.ReactElement => {
//   const { t } = useTranslation();
//   const { seq } = useParams<PortfolioUri>();
//   const portfolioState = portfoliosData.filter(
//     (portfolio) => portfolio.seq === seq
//   )[0];
//   const PortfolioItem = lazy(
//     () => import(`../../../data/PortfoliosData/${portfolioState.seq}`)
//   );
//   const relatedPosts = portfolioState
//     ? postsData
//         .reduce<Array<PostsDataProps>>((acc, post) => {
//           if (
//             portfolioState.series &&
//             post.series &&
//             portfolioState.series === post.series
//           ) {
//             acc.push(post);
//           }
//           return acc;
//         }, [])
//         .sort((a, b) => +a.seq - +b.seq)
//     : [];
//   return (
//     <>
//       {portfolioState ? (
//         <>
//           <Meta
//             title={portfolioState.title}
//             description={portfolioState.content}
//           />
//           <article className="jth-portfolio">
//             <section className="jth-portfolio-content">
//               <ErrorBoundary>
//                 <Suspense
//                   fallback={
//                     <div className="jth-container jth-portfolio-loading">
//                       <IconSpinner spin />
//                     </div>
//                   }
//                 >
//                   <PortfolioItem />
//                 </Suspense>
//               </ErrorBoundary>
//             </section>
//             {relatedPosts.length > 0 && (
//               <section className="jth-container">
//                 <h2>{t('Portfolio.relatedPosts')}</h2>
//                 <ul className="jth-container jth-portfolio-relatedPosts">
//                   {relatedPosts.map((post) => {
//                     return (
//                       <li key={post.title}>
//                         <Link to={`/posts/${post.seq}`} aria-label={post.title}>
//                           {post.title}
//                         </Link>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </section>
//             )}
//           </article>
//         </>
//       ) : (
//         <NoMatch />
//       )}
//     </>
//   );
// };

// export default Portfolio;
