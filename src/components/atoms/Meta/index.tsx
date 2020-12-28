// import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useTranslation } from 'react-i18next';
// import { useRecoilValue } from 'recoil';
// import { languageState } from '../../../recoilStates';

// export interface MetaProps {
//   title?: string;
//   description?: string;
//   url?: string;
//   language?: string;
//   type?:
//     | 'website'
//     | 'image/jpeg'
//     | 'image/gif'
//     | 'image/png'
//     | 'application/x-shockwave-flash'
//     | 'video/mp4';
//   image?: string;
//   video?: string;
//   width?: string;
//   height?: string;
//   fbAppId?: string;
//   siteName?: string;
// }

// const Meta = ({
//   title,
//   description,
//   url = window.location.href,
//   language,
//   type = 'website',
//   image,
//   video,
//   width = '1200',
//   height = '630',
//   fbAppId,
//   siteName = 'JthCast',
// }: MetaProps): React.ReactElement => {
//   const { t } = useTranslation();
//   const languageValue = useRecoilValue(languageState);
//   const lang = language || languageValue;

//   return (
//     <Helmet titleTemplate={`%s - ${t('Common.title')}`}>
//       <html lang={lang} />
//       <title>{title}</title>
//       <meta name="description" content={description} />

//       {/* Facebook Open Graph - https://developers.facebook.com/docs/sharing/webmasters#markup */}
//       {url && <meta property="og:url" content={url} />}
//       {title && <meta property="og:title" content={title} />}
//       {description && <meta property="og:description" content={description} />}
//       {type && <meta property="og:type" content={type} />}
//       {image && <meta property="og:image" content={image} />}
//       {image && (
//         <meta property="og:image:secure_url" content={`https://${image}`} />
//       )}
//       {image && type && <meta property="og:image:type" content={type} />}
//       {image && width && <meta property="og:image:width" content={width} />}
//       {image && height && <meta property="og:image:height" content={height} />}
//       {video && <meta property="og:video" content={video} />}
//       {video && (
//         <meta property="og:video:secure_url" content={`https://${video}`} />
//       )}
//       {video && type && <meta property="og:video:type" content={type} />}
//       {video && width && <meta property="og:video:width" content={width} />}
//       {video && height && <meta property="og:video:height" content={height} />}
//       {fbAppId && <meta property="fb:app_id" content={fbAppId} />}

//       {/* Twitter - https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started */}
//       <meta name="twitter:card" content="summary_large_image" />
//       {siteName && <meta name="twitter:site" content={`@${siteName}`} />}
//       {siteName && <meta name="twitter:creator" content={`@${siteName}`} />}
//     </Helmet>
//   );
// };

// export default Meta;
