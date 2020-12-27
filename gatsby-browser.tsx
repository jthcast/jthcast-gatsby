import React from "react"
import { RecoilRoot } from "recoil"
import "./src/normalize.css"
// my CSS
import "./src/mixins.scss"
import "./src/index.scss"
// Highlighting for code blocks
import "prismjs/themes/prism.css"

export const wrapRootElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>
}
