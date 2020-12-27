import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-css-extras';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
// import 'prismjs/components/prism-jsx';
// import 'prismjs/components/prism-tsx';
// import 'prismjs/plugins/line-numbers/prism-line-numbers';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-tomorrow.css';
// import './prism-vsc-dark-plus.scss';
import './PrismCode.scss';

interface IPrismCode {
  code?: string;
  language?: string;
  plugins?: Array<string>;
}

const PrismCode = ({
  code,
  language = 'typescript',
  plugins,
}: IPrismCode): JSX.Element => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, []);
  return (
    <pre className={plugins && plugins.join(' ')}>
      <code
        ref={ref}
        className={`language-${language}${
          plugins ? ` ${plugins.join(' ')}` : ''
        }`}
      >
        {code && code.trim()}
      </code>
    </pre>
  );
};

export default PrismCode;
