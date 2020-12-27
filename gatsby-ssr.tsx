import React from "react"
import { RecoilRoot } from "recoil"

const SetColorModeBeforeRendering = () => {
  let codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
  
      if (persistedColorPreference) {
        return persistedColorPreference;
      }
  
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
      if (systemPreference.matches) {
        return 'dark';
      }
      return 'light';
    }
  }
  const colorMode = getInitialColorMode();
  document.body.setAttribute('data-theme', colorMode);
})()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<SetColorModeBeforeRendering />);
};

export const wrapRootElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>
}
