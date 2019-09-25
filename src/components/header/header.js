import React from 'react'
import { locale } from '../../config/locale'
const globalSystem = require('../../config/global')

class HeaderComponent extends React.Component {
  constructor() {
    super()
    console.log(`user name: ${globalSystem.user}`)
    console.log(`currentLanguage: ${globalSystem.lang}`)
    globalSystem.lang = 'en'
  }
  render() {
    return (
      <React.Fragment>        
      </React.Fragment>
    )
  }
}

export default HeaderComponent