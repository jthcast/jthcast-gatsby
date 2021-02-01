import React from 'react'
import './src/normalize.css'
// my CSS
import './src/mixins.scss'
import './src/index.scss'
// Highlighting for code blocks
import './src/prism-vsc-dark-plus.scss'
import { ThemeProvider } from './src/context/ThemeContext'
import { HeaderMessageProvider } from './src/context/HeaderMessageContext'
import { LanguageProvider } from './src/context/LanguageContext'

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider>
      <HeaderMessageProvider>
        <LanguageProvider>
          {element}
        </LanguageProvider>
      </HeaderMessageProvider>
    </ThemeProvider>
  )
};
