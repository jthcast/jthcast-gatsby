import React from "react"
import { RecoilRoot } from "recoil"

const CheckLegacyIE = () => {
  let codeToRunOnClient = `
(function() {
  if (document['documentMode'] === 11 && navigator.userAgent.indexOf('Windows NT 10.0') > -1) {
    window.location.href = 'microsoft-edge:' + document.URL;
    window.location.href = 'https://support.microsoft.com/office/the-website-you-were-trying-to-reach-doesn-t-work-with-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554';
  }else if (document['documentMode'] <= 11) {
    var paragraph = document.createElement('p');
    var message = document.createTextNode('Sorry, Browser version is not supported. Please use a modern browser.');
    paragraph.appendChild(message);
    var edgeParagraph = document.createElement('p');
    var edgeAnchor = document.createElement('a');
    var edgeAnchorText = document.createTextNode('Microsoft Edge');
    edgeAnchor.appendChild(edgeAnchorText);
    edgeAnchor.setAttribute('href', 'https://www.microsoft.com/edge');
    edgeAnchor.setAttribute('target', '_blank');
    edgeParagraph.appendChild(edgeAnchor);
    var chromeParagraph = document.createElement('p');
    var chromeAnchor = document.createElement('a');
    var chromeAnchorText = document.createTextNode('Google Chrome');
    chromeAnchor.appendChild(chromeAnchorText);
    chromeAnchor.setAttribute('href', 'https://www.google.com/chrome');
    chromeAnchor.setAttribute('target', '_blank');
    chromeParagraph.appendChild(chromeAnchor);
    document.body.appendChild(paragraph);
    document.body.appendChild(edgeParagraph);
    document.body.appendChild(chromeParagraph);
  }
})()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

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
  document.documentElement.style.setProperty(
    'background-color',
    colorMode === 'light' ? '#FFFFFF' : '#000000'
  );
  document.body.setAttribute('data-theme', colorMode);
})()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<CheckLegacyIE key="CheckLegacyIE" />);
  setPreBodyComponents(<SetColorModeBeforeRendering key="SetColorModeBeforeRendering" />);
};

export const wrapRootElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>
}
