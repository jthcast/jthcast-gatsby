import React, { CSSProperties, SVGAttributes } from 'react';
import './Icons.scss';

export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
  rotate?: number;
  onClick?: () => void;
}

interface IconContentProps {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
  rotate?: number;
  onClick?: () => void;
  iconName: string;
}

interface IconDetailProps {
  [name: string]: { viewBox: string; d: string };
}

const icons: IconDetailProps = {
  IconAngleDown: {
    viewBox: '0 0 320 512',
    d:
      'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z',
  },
  IconArrowToTop: {
    viewBox: '64 64 896 896',
    d:
      'M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z',
  },
  IconBars: {
    viewBox: '0 0 448 512',
    d:
      'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
  },
  IconCombination: {
    viewBox: '0 0 512 512',
    d:
      'M47 355.77V207.678h22.96v24.108h1.148c3.635-8.419 8.706-15.115 15.211-20.09 6.697-4.975 15.594-7.462 26.691-7.462 15.307 0 27.361 4.975 36.162 14.924 8.993 9.758 13.489 23.63 13.489 41.615v94.997h-22.96v-90.979c0-26.595-11.193-39.893-33.579-39.893-4.592 0-9.088.574-13.489 1.722-4.21 1.148-8.036 2.87-11.48 5.166-3.444 2.296-6.218 5.262-8.323 8.897-1.913 3.444-2.87 7.558-2.87 12.341V355.77H47zM283.017 359.214c-25.447 0-45.25-8.61-59.409-25.83-14.159-17.411-21.238-42.954-21.238-76.629 0-33.675 7.079-59.505 21.238-77.49C237.767 161.088 257.57 152 283.017 152c16.837 0 30.9 3.827 42.189 11.48 11.48 7.653 20.377 18.464 26.691 32.431l-19.516 11.767c-4.018-10.332-10.141-18.559-18.368-24.682-8.227-6.314-18.559-9.471-30.996-9.471-8.61 0-16.359 1.626-23.247 4.879-6.697 3.253-12.437 7.94-17.22 14.063-4.592 5.931-8.132 13.106-10.619 21.525-2.487 8.227-3.731 17.507-3.731 27.839v29.848c0 20.664 4.783 36.832 14.35 48.503s23.056 17.507 40.467 17.507c12.819 0 23.534-3.253 32.144-9.758 8.61-6.697 14.924-15.498 18.942-26.404l19.229 12.054c-6.314 14.159-15.402 25.352-27.265 33.579-11.863 8.036-26.213 12.054-43.05 12.054zM388.373 355.77V207.678h22.96v27.265h1.435c2.679-7.079 7.462-13.393 14.35-18.942 6.888-5.549 16.359-8.323 28.413-8.323h8.897v22.96h-13.489c-12.437 0-22.195 2.392-29.274 7.175-6.888 4.592-10.332 10.428-10.332 17.507v100.45h-22.96z',
  },
  IconCommentDots: {
    viewBox: '0 0 512 512',
    d:
      'M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z',
  },
  IconEye: {
    viewBox: '0 0 576 512',
    d:
      'M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z',
  },
  IconEnvelope: {
    viewBox: '0 0 512 512',
    d:
      'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z',
  },
  IconEyeSlash: {
    viewBox: '0 0 640 512',
    d:
      'M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z',
  },
  IconGCD: {
    viewBox: '0 0 512 512',
    d:
      'M150.861 315.574h-.884c-1.621 7.514-6.041 13.776-13.26 18.785-7.072 4.862-16.501 7.293-28.288 7.293-9.135 0-17.606-1.694-25.415-5.083-7.809-3.536-14.586-8.619-20.332-15.249-5.599-6.777-10.019-15.102-13.26-24.973-3.094-10.019-4.641-21.511-4.641-34.476 0-12.818 1.62-24.163 4.862-34.034 3.241-10.019 7.809-18.417 13.702-25.194 5.893-6.777 12.965-11.86 21.216-15.249 8.25-3.536 17.459-5.304 27.625-5.304 13.849 0 25.562 3.094 35.139 9.282 9.577 6.041 17.017 14.512 22.321 25.415l-20.332 11.934c-2.947-7.219-7.514-13.039-13.702-17.459-6.188-4.567-13.997-6.851-23.426-6.851-12.229 0-22.1 3.904-29.614 11.713-7.367 7.809-11.05 18.859-11.05 33.15v25.194c0 14.291 3.683 25.341 11.05 33.15 7.514 7.809 17.385 11.713 29.614 11.713 4.862 0 9.503-.589 13.923-1.768 4.42-1.326 8.251-3.168 11.492-5.525 3.389-2.505 6.041-5.525 7.956-9.061 2.063-3.683 3.094-7.956 3.094-12.818v-11.934h-31.824v-21.437h55.913V339h-21.879v-23.426zM265.356 341.652c-20.184 0-36.023-6.777-47.515-20.332-11.492-13.702-17.238-33.518-17.238-59.449 0-12.965 1.474-24.384 4.42-34.255 2.947-9.871 7.22-18.196 12.818-24.973 5.599-6.777 12.376-11.86 20.332-15.249 8.104-3.536 17.165-5.304 27.183-5.304 13.408 0 24.605 2.947 33.592 8.84 9.135 5.893 16.281 14.586 21.437 26.078L299.39 228.5c-2.652-7.367-6.777-13.186-12.376-17.459-5.451-4.42-12.67-6.63-21.658-6.63-11.934 0-21.289 4.052-28.067 12.155-6.777 8.103-10.166 19.301-10.166 33.592v23.426c0 14.291 3.389 25.489 10.166 33.592 6.778 8.103 16.133 12.155 28.067 12.155 9.282 0 16.796-2.357 22.542-7.072 5.894-4.862 10.24-11.05 13.039-18.564l20.111 12.155c-5.156 11.197-12.376 19.964-21.658 26.299-9.282 6.335-20.626 9.503-34.034 9.503zM347.522 184.742h54.587c9.871 0 18.785 1.621 26.741 4.862 8.103 3.241 14.954 8.103 20.553 14.586 5.746 6.335 10.166 14.365 13.26 24.089 3.094 9.577 4.641 20.774 4.641 33.592 0 12.818-1.547 24.089-4.641 33.813-3.094 9.577-7.514 17.606-13.26 24.089-5.599 6.335-12.45 11.124-20.553 14.365-7.956 3.241-16.87 4.862-26.741 4.862h-54.587V184.742zM402.109 316.9c11.492 0 20.774-3.61 27.846-10.829 7.072-7.219 10.608-17.827 10.608-31.824v-24.752c0-13.997-3.536-24.605-10.608-31.824-7.072-7.219-16.354-10.829-27.846-10.829h-29.614V316.9h29.614z',
  },
  IconGithub: {
    viewBox: '0 0 448 512',
    d:
      'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z',
  },
  IconHome: {
    viewBox: '64 64 896 896',
    d:
      'M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z',
  },
  IconLaptopCode: {
    viewBox: '0 0 640 512',
    d:
      'M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z',
  },
  IconLCM: {
    viewBox: '0 0 512 512',
    d:
      'M62.1 339V184.742h24.972V316.9h62.764V339H62.099zM225.753 341.652c-20.184 0-36.023-6.777-47.515-20.332C166.746 307.618 161 287.802 161 261.871c0-12.965 1.474-24.384 4.42-34.255 2.947-9.871 7.22-18.196 12.818-24.973 5.599-6.777 12.376-11.86 20.332-15.249 8.104-3.536 17.165-5.304 27.183-5.304 13.408 0 24.605 2.947 33.592 8.84 9.135 5.893 16.281 14.586 21.437 26.078L259.787 228.5c-2.652-7.367-6.777-13.186-12.376-17.459-5.451-4.42-12.67-6.63-21.658-6.63-11.934 0-21.289 4.052-28.067 12.155-6.777 8.103-10.166 19.301-10.166 33.592v23.426c0 14.291 3.389 25.489 10.166 33.592 6.778 8.103 16.133 12.155 28.067 12.155 9.282 0 16.796-2.357 22.542-7.072 5.894-4.862 10.24-11.05 13.039-18.564l20.111 12.155c-5.156 11.197-12.376 19.964-21.658 26.299-9.282 6.335-20.626 9.503-34.034 9.503zM425.933 220.986h-1.105l-12.155 24.973-33.813 61.659-33.813-61.659-12.155-24.973h-1.105V339h-23.868V184.742h29.614l41.327 78.455h1.326l41.327-78.455h28.288V339h-23.868V220.986z',
  },
  IconLink: {
    viewBox: '0 0 512 512',
    d:
      'M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z',
  },
  IconLinkedIn: {
    viewBox: '0 0 448 512',
    d:
      'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
  },
  IconLogo: {
    viewBox: '0 0 512 512',
    d:
      'M472.929 396.064c3.905 3.905 3.907 10.263-.142 14.019-102.927 95.484-263.807 93.168-363.922-6.948C8.749 303.02 6.433 142.14 101.917 39.213c3.756-4.049 10.113-4.047 14.019-.142l32.249 32.25c3.906 3.905 3.884 10.221.179 14.317-69.899 77.261-67.601 196.612 6.893 271.105 74.493 74.494 193.844 76.792 271.105 6.893 4.096-3.705 10.412-3.727 14.317.178l32.25 32.25z M416.925 82.239c7.435-1.993 14.24 4.812 12.247 12.247l-49.857 186.069c-1.992 7.435-11.287 9.926-16.73 4.482L226.374 148.826c-5.444-5.443-2.953-14.738 4.482-16.73l186.069-49.857z',
  },
  IconObjectGroup: {
    viewBox: '0 0 512 512',
    d:
      'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
  },
  IconPermutation: {
    viewBox: '0 0 448 512',
    d:
      'M50 356.024V207.416h23.04v24.192h1.152c3.648-8.448 8.736-15.168 15.264-20.16 6.72-4.992 15.648-7.488 26.784-7.488 15.36 0 27.456 4.992 36.288 14.976 9.024 9.792 13.536 23.712 13.536 41.76v95.328h-23.04v-91.296c0-26.688-11.232-40.032-33.696-40.032-4.608 0-9.12.576-13.536 1.728-4.224 1.152-8.064 2.88-11.52 5.184-3.456 2.304-6.24 5.28-8.352 8.928-1.92 3.456-2.88 7.584-2.88 12.384v103.104H50zM215.992 356.024V155h80.064c18.048 0 31.872 5.184 41.472 15.552 9.792 10.176 14.688 24.192 14.688 42.048s-4.896 31.968-14.688 42.336c-9.6 10.176-23.424 15.264-41.472 15.264h-55.872v85.824h-24.192zm24.192-107.136h55.872c9.6 0 16.992-2.496 22.176-7.488 5.376-4.992 8.064-12.096 8.064-21.312v-14.976c0-9.216-2.688-16.32-8.064-21.312-5.184-4.992-12.576-7.488-22.176-7.488h-55.872v72.576zM385.531 356.024V207.416h23.04v27.36h1.44c2.688-7.104 7.488-13.44 14.4-19.008s16.416-8.352 28.512-8.352h8.928v23.04h-13.536c-12.48 0-22.272 2.4-29.376 7.2-6.912 4.608-10.368 10.464-10.368 17.568v100.8h-23.04z',
  },
  IconPlay: {
    viewBox: '0 0 448 512',
    d:
      'M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z',
  },
  IconSearch: {
    viewBox: '0 0 512 512',
    d:
      'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
  },
  IconSearchPlus: {
    viewBox: '0 0 512 512',
    d:
      'M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z',
  },
  IconSieve: {
    viewBox: '0 0 512 512',
    d:
      'M428.059 113.778h-51.991c-3.046-13.56-14.685-23.908-28.881-24.99-1.265-16.565-15.151-29.658-32.039-29.658-2.456 0-4.916.286-7.311.851a7.499 7.499 0 00-5.58 9.02c.95 4.032 4.994 6.532 9.02 5.58 1.27-.299 2.571-.45 3.871-.45 9.447 0 17.133 7.683 17.133 17.125 0 1.296-.151 2.599-.451 3.872a7.5 7.5 0 009.016 9.018 16.974 16.974 0 013.876-.45c6.935 0 12.906 4.147 15.601 10.084H151.679c2.694-5.937 8.666-10.084 15.601-10.084 1.299 0 2.603.151 3.876.45a7.5 7.5 0 009.016-9.018 16.904 16.904 0 01-.451-3.872c0-9.442 7.686-17.125 17.133-17.125 1.3 0 2.602.151 3.871.45a7.499 7.499 0 009.02-9.016 16.981 16.981 0 01-.451-3.873c0-9.443 7.686-17.126 17.133-17.126 1.297 0 2.601.152 3.875.451a7.498 7.498 0 009.016-9.02 16.9 16.9 0 01-.45-3.869C238.866 22.684 246.553 15 256 15s17.134 7.684 17.134 17.127c0 1.298-.151 2.6-.45 3.869a7.497 7.497 0 009.016 9.02 17.025 17.025 0 0113.9 2.798 7.5 7.5 0 0010.474-1.673 7.499 7.499 0 00-1.673-10.474 32.29 32.29 0 00-5.217-3.078 31.754 31.754 0 00-11.144-2.932C286.775 13.092 272.888 0 256 0s-30.775 13.093-32.04 29.659c-15.756 1.201-28.37 13.813-29.573 29.564-15.756 1.201-28.37 13.813-29.573 29.564-14.196 1.082-25.835 11.431-28.881 24.99H83.941c-6.893 0-12.5 5.607-12.5 12.5v20.21c0 6.893 5.607 12.5 12.5 12.5h5.817c6.407 36.678 24.823 70.264 52.663 95.602A169.112 169.112 0 00166.11 272.6a7.445 7.445 0 002.317 1.435c26.207 15.925 56.398 24.478 87.571 24.478 42.119 0 82.455-15.599 113.578-43.923 27.84-25.338 46.256-58.924 52.663-95.602h5.817c6.893 0 12.5-5.607 12.5-12.5v-20.21c.003-6.892-5.605-12.5-12.497-12.5zM112.09 184.05a151.413 151.413 0 01-1.782-4.972l3.378 3.377-1.596 1.595zm264.505-1.595l-11.302 11.297-11.301-11.297 11.301-11.299 11.302 11.299zm-.694-21.903l1.563-1.563h22.604l-12.865 12.861-11.302-11.298zm-185.88 54.41l11.302 11.298-11.302 11.298-11.301-11.298 11.301-11.298zm-21.91.692l-11.301-11.297 11.301-11.298 11.301 11.298-11.301 11.297zm32.518-11.297l11.301-11.299 11.302 11.299-11.302 11.298-11.301-11.298zm33.21 10.605l11.302 11.298-11.302 11.298-11.301-11.298 11.301-11.298zm10.608-10.605l11.301-11.298 11.301 11.298-11.301 11.297-11.301-11.297zm11.301 32.507l11.301 11.298-11.301 11.298-11.301-11.298 11.301-11.298zm10.608-10.604l11.301-11.298 11.301 11.298-11.301 11.297-11.301-11.297zm21.91-21.903l11.301-11.298 11.301 11.298-11.301 11.297-11.301-11.297zm33.21 10.605l11.301 11.298-11.301 11.298-11.302-11.298 11.302-11.298zm10.607-10.605l11.302-11.298 11.301 11.298-11.301 11.298-11.302-11.298zm11.302-32.507l-11.302-11.298 1.563-1.563h19.475l1.564 1.563-11.3 11.298zm-10.609 10.605l-11.301 11.297-11.302-11.298 11.302-11.298 11.301 11.299zm-33.21-10.605l-11.301-11.298 1.564-1.563h19.474l1.563 1.563-11.3 11.298zm-10.608 10.604l-11.301 11.298-11.301-11.298 11.301-11.298 11.301 11.298zm-33.21-10.604l-11.302-11.299 1.563-1.563h19.475l1.564 1.563-11.3 11.299zm-10.607 10.604l-11.302 11.298-11.302-11.298 11.302-11.298 11.302 11.298zM211.93 171.85l-11.301-11.298 1.564-1.563h19.475l1.563 1.563-11.301 11.298zm-10.609 10.604l-11.301 11.298-11.301-11.297 11.301-11.298 11.301 11.297zm-33.21-10.604l-11.301-11.298 1.564-1.563h19.475l1.563 1.563-11.301 11.298zm-10.607 10.605l-11.301 11.297-11.302-11.297 11.302-11.299 11.301 11.299zm-33.21-10.605l-12.866-12.861h22.604l1.563 1.563-11.301 11.298zm2.493 41.312a153.37 153.37 0 01-8.229-14.369l5.735-5.733 11.301 11.298-8.807 8.804zm8.878 12.335l10.538-10.535 11.301 11.298-11.225 11.221a154.532 154.532 0 01-10.614-11.984zm34.539 31.871a153.79 153.79 0 01-12.898-9.701l10.806-10.803 11.302 11.298-9.21 9.206zm28.657 15.157a152.807 152.807 0 01-15.417-7.184l6.576-6.574 11.302 11.298-2.461 2.46zm1.768-24.363l11.301-11.297 11.301 11.297-11.301 11.298-11.301-11.298zm33.21 33.2l-11.301-11.297 11.301-11.298 11.301 11.297-11.301 11.298zM256 283.513c-1.021 0-2.041-.016-3.061-.035l2.809-2.808 2.814 2.813c-.853.014-1.707.03-2.562.03zm21.657-2.15l-11.302-11.299 11.302-11.298 11.301 11.298-11.301 11.299zm10.609-33.201l11.301-11.298 11.301 11.298-11.301 11.298-11.301-11.298zm24.513 24.507l-2.605-2.604 11.302-11.297 6.753 6.751a153.183 153.183 0 01-15.45 7.15zm28.715-15.099l-9.411-9.408 11.302-11.298 11.037 11.034a153.83 153.83 0 01-12.928 9.672zm23.977-19.836l-11.479-11.475 11.301-11.298 10.818 10.815a154.565 154.565 0 01-10.64 11.958zm19.546-24.264l-9.115-9.112 11.301-11.298 6.071 6.069a153.727 153.727 0 01-8.257 14.341zm14.756-29.053l-1.963-1.962 4.133-4.132a151.49 151.49 0 01-2.17 6.094zm25.786-40.429H86.441v-15.21h339.117v15.21z M237.127 70.652c3.066-3.064 8.055-3.064 11.121 0a7.474 7.474 0 005.303 2.196 7.5 7.5 0 005.303-12.803c-8.914-8.912-23.418-8.912-32.332 0a7.5 7.5 0 00-.001 10.606 7.5 7.5 0 0010.606.001zM274.301 88.785a7.5 7.5 0 0010.606 10.607c3.067-3.065 8.055-3.063 11.12 0a7.474 7.474 0 005.303 2.196c1.919 0 3.84-.732 5.304-2.197a7.498 7.498 0 00-.001-10.606c-8.914-8.911-23.417-8.913-32.332 0zM196.737 93.276a7.5 7.5 0 0010.606 10.607c3.065-3.063 8.053-3.065 11.12 0a7.474 7.474 0 005.303 2.196c1.919 0 3.84-.732 5.304-2.197a7.498 7.498 0 00-.001-10.606c-8.915-8.912-23.418-8.91-32.332 0zM433.97 497h-55.548l-44.271-41.819a7.5 7.5 0 10-10.301 10.905L356.578 497H153.441l59.965-60.221c10.543-10.587 24.646-16.418 39.711-16.418 15.066 0 29.171 5.831 39.714 16.419l8.021 7.58a7.5 7.5 0 0010.602-.304 7.5 7.5 0 00-.303-10.603l-7.773-7.341c-13.369-13.383-31.214-20.752-50.26-20.752-19.083 0-36.961 7.398-50.34 20.834L132.273 497H78.03c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h355.94c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z M259.399 431.92a7.552 7.552 0 00-2.199 5.31c0 1.971.8 3.9 2.199 5.301a7.516 7.516 0 005.301 2.199c1.979 0 3.909-.8 5.3-2.199a7.55 7.55 0 002.2-5.301c0-1.979-.801-3.91-2.2-5.31a7.562 7.562 0 00-5.3-2.19 7.559 7.559 0 00-5.301 2.19zM295.35 455.63c0-1.97-.8-3.91-2.2-5.311a7.576 7.576 0 00-5.3-2.189c-1.98 0-3.91.8-5.31 2.189a7.58 7.58 0 00-2.19 5.311c0 1.97.8 3.91 2.19 5.3a7.55 7.55 0 005.31 2.2c1.97 0 3.9-.8 5.3-2.2 1.4-1.4 2.2-3.33 2.2-5.3zM305.69 464.85a7.55 7.55 0 00-2.199 5.311c0 1.97.8 3.899 2.199 5.3a7.55 7.55 0 005.301 2.2 7.559 7.559 0 005.31-2.2 7.578 7.578 0 002.19-5.3c0-1.98-.801-3.91-2.19-5.311a7.583 7.583 0 00-5.31-2.189 7.574 7.574 0 00-5.301 2.189zM243.96 450.319a7.581 7.581 0 00-2.191 5.311c0 1.97.8 3.91 2.191 5.3a7.549 7.549 0 005.309 2.2c1.971 0 3.9-.8 5.3-2.2a7.543 7.543 0 002.2-5.3c0-1.97-.8-3.91-2.2-5.311a7.574 7.574 0 00-5.3-2.189c-1.979 0-3.91.8-5.309 2.189zM280.67 473.96c-1.97 0-3.9.81-5.3 2.2a7.543 7.543 0 00-2.2 5.3c0 1.98.8 3.91 2.2 5.31a7.582 7.582 0 005.3 2.2c1.98 0 3.91-.81 5.31-2.2a7.578 7.578 0 002.19-5.31c0-1.97-.8-3.9-2.19-5.3a7.596 7.596 0 00-5.31-2.2zM178.67 301.819a7.585 7.585 0 00-2.19 5.311c0 1.97.801 3.9 2.19 5.3a7.592 7.592 0 005.31 2.2c1.971 0 3.9-.811 5.301-2.2a7.547 7.547 0 002.199-5.3c0-1.98-.8-3.91-2.199-5.311a7.578 7.578 0 00-5.301-2.189c-1.98 0-3.911.8-5.31 2.189zM322.72 301.819a7.594 7.594 0 00-2.2 5.311c0 1.97.811 3.9 2.2 5.3a7.57 7.57 0 005.3 2.2c1.98 0 3.91-.811 5.311-2.2a7.576 7.576 0 002.189-5.3c0-1.98-.8-3.91-2.189-5.311a7.584 7.584 0 00-5.311-2.189c-1.97 0-3.911.8-5.3 2.189zM222.99 315.92a7.556 7.556 0 00-2.19 5.3c0 1.98.8 3.91 2.19 5.311a7.6 7.6 0 005.31 2.189c1.97 0 3.9-.8 5.3-2.189 1.4-1.4 2.2-3.341 2.2-5.311 0-1.97-.8-3.9-2.2-5.3a7.543 7.543 0 00-5.3-2.2c-1.97 0-3.91.8-5.31 2.2zM285.71 313.72c-1.97 0-3.9.8-5.3 2.2a7.582 7.582 0 00-2.2 5.3c0 1.97.81 3.91 2.2 5.311a7.576 7.576 0 005.3 2.189c1.98 0 3.91-.8 5.31-2.189a7.58 7.58 0 002.19-5.311c0-1.97-.8-3.91-2.19-5.3a7.55 7.55 0 00-5.31-2.2zM261.3 351.7c1.4-1.4 2.2-3.33 2.2-5.301 0-1.98-.8-3.909-2.2-5.31a7.56 7.56 0 00-5.3-2.19c-1.98 0-3.91.801-5.3 2.19a7.55 7.55 0 00-2.2 5.31c0 1.971.8 3.91 2.2 5.301 1.39 1.399 3.33 2.199 5.3 2.199s3.899-.799 5.3-2.199zM299.31 363.97c1.98 0 3.91-.8 5.31-2.2a7.56 7.56 0 002.19-5.3c0-1.979-.8-3.91-2.19-5.3a7.55 7.55 0 00-5.31-2.2c-1.97 0-3.899.8-5.3 2.2a7.51 7.51 0 00-2.2 5.3c0 1.97.8 3.91 2.2 5.3 1.4 1.4 3.33 2.2 5.3 2.2zM241.63 380.37a7.508 7.508 0 00-2.2 5.3 7.51 7.51 0 007.5 7.5c1.98 0 3.91-.8 5.311-2.2a7.542 7.542 0 002.189-5.3c0-1.97-.8-3.91-2.189-5.3-1.4-1.4-3.33-2.2-5.311-2.2-1.97 0-3.91.8-5.3 2.2zM198.319 356.2a7.552 7.552 0 00-2.199 5.31c0 1.97.8 3.9 2.199 5.3a7.559 7.559 0 005.301 2.19c1.97 0 3.91-.8 5.3-2.19a7.548 7.548 0 002.2-5.3c0-1.979-.801-3.91-2.2-5.31a7.51 7.51 0 00-5.3-2.2c-1.98 0-3.91.8-5.301 2.2z',
  },
  IconSpinner: {
    viewBox: '0 0 1024 1024',
    d:
      'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
  },
  IconTimes: {
    viewBox: '0 0 352 512',
    d:
      'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
  },
  IconTimesCircle: {
    viewBox: '0 0 512 512',
    d:
      'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z',
  },
  IconUser: {
    viewBox: '0 0 448 512',
    d:
      'M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z',
  },
  IconUserTie: {
    viewBox: '0 0 448 512',
    d:
      'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z',
  },
};

const getRotateDegree = (viewBox: string) => {
  const viewBoxArray = viewBox.split(' ');

  return `${+viewBoxArray[2] / 2} ${+viewBoxArray[3] / 2}`;
};

const IconTemplate = ({
  className,
  style,
  spin,
  rotate,
  onClick,
  iconName,
}: IconContentProps): JSX.Element => {
  return (
    <svg
      viewBox={icons[iconName].viewBox}
      focusable="false"
      className={`jth-icon${className ? ` ${className}` : ``}${spin ? ' spin' : ``
        }`}
      style={style}
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      onClick={onClick}
    >
      <path
        transform={
          rotate
            ? `rotate(${rotate} ${getRotateDegree(icons[iconName].viewBox)})`
            : undefined
        }
        d={icons[iconName].d}
      />
    </svg>
  );
};

const IconAngleDown = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconAngleDown';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconArrowToTop = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconArrowToTop';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconBars = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconBars';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconCombination = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconCombination';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconCommentDots = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconCommentDots';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconEye = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconEye';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconEnvelope = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconEnvelope';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconEyeSlash = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconEyeSlash';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconGithub = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconGithub';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconGCD = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconGCD';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconHome = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconHome';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLaptopCode = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconLaptopCode';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLCM = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconLCM';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLink = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconLink';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLinkedIn = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconLinkedIn';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLogo = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconLogo';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconObjectGroup = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconObjectGroup';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconPermutation = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconPermutation';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconPlay = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconPlay';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconSearch = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconSearch';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconSearchPlus = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconSearchPlus';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconSieve = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconSieve';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconSpinner = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconSpinner';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconTimes = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconTimes';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconTimesCircle = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconTimesCircle';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconUser = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconUser';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconUserTie = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconUserTie';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLogoColored = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const viewBox = '0 0 512 512';
  return (
    <svg
      viewBox={viewBox}
      focusable="false"
      className={`jth-icon${className ? ` ${className}` : ``}${spin ? ' spin' : ``
        }`}
      style={style}
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      onClick={onClick}
    >
      <path
        transform={
          rotate ? `rotate(${rotate} ${getRotateDegree(viewBox)})` : undefined
        }
        fill="#614CF6"
        d="M472.929 396.064c3.905 3.905 3.907 10.263-.142 14.019-102.927 95.484-263.807 93.168-363.922-6.948C8.749 303.02 6.433 142.14 101.917 39.213c3.756-4.049 10.113-4.047 14.019-.142l32.249 32.25c3.906 3.905 3.884 10.221.179 14.317-69.899 77.261-67.601 196.612 6.893 271.105 74.493 74.494 193.844 76.792 271.105 6.893 4.096-3.705 10.412-3.727 14.317.178l32.25 32.25z"
      />
      <path
        transform={
          rotate ? `rotate(${rotate} ${getRotateDegree(viewBox)})` : undefined
        }
        fill="#F6A54C"
        d="M416.925 82.239c7.435-1.993 14.24 4.812 12.247 12.247l-49.857 186.069c-1.992 7.435-11.287 9.926-16.73 4.482L226.374 148.826c-5.444-5.443-2.953-14.738 4.482-16.73l186.069-49.857z"
      />
    </svg>
  );
};

export {
  IconAngleDown,
  IconArrowToTop,
  IconBars,
  IconCommentDots,
  IconCombination,
  IconEnvelope,
  IconEye,
  IconEyeSlash,
  IconGCD,
  IconGithub,
  IconHome,
  IconLaptopCode,
  IconLCM,
  IconLink,
  IconLinkedIn,
  IconObjectGroup,
  IconPermutation,
  IconPlay,
  IconSearch,
  IconSearchPlus,
  IconSieve,
  IconSpinner,
  IconTimes,
  IconTimesCircle,
  IconUser,
  IconUserTie,
  IconLogo,
  IconLogoColored,
};
