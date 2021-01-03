import React from 'react'
import { RecoilRoot } from 'recoil'
import './src/normalize.css'
// my CSS
import './src/mixins.scss'
import './src/index.scss'
// Highlighting for code blocks
import './src/prism-vsc-dark-plus.scss'
import { MDXProvider } from '@mdx-js/react'

const ExternalLink = ({ children, ...props }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" className="jth-external-link" {...props}>
      {children}
    </a>
  )
}

export const wrapRootElement = ({ element, props }) => {

  const shortcodes = { ExternalLink };

  return (
    <RecoilRoot {...props}>
      <MDXProvider components={shortcodes}>{element}</MDXProvider>
    </RecoilRoot>
  )
}
