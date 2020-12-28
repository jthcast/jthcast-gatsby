// import React from 'react';
// import './ErrorPage.scss';
// import { Link } from '../../../components/atoms/ErrorBoundary/node_modules/react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Button from '../../components/atoms/Button';

// const ErrorPage = (): React.ReactElement => {
//   const { t } = useTranslation();
//   return (
//     <section className="jth-section jth-errorPage">
//       <div className="jth-container jth-section-rowGrid-center">
//         <h1 data-content={t('ErrorPage.errorMessage')}>
//           {t('ErrorPage.errorMessage')}
//         </h1>
//         <p>{t('ErrorPage.errorSubMessage')}</p>
//         <Button
//           buttonType="a"
//           href="mailto:jthcast@gmail.com"
//           lineType="reverseBackground"
//         >
//           {t('ErrorPage.reportButtonMessage')}
//         </Button>
//         <Link className="jth-errorPage-link" to="/">
//           {t('Common.homePage')}
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default ErrorPage;
