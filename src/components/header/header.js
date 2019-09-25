import React from 'react'
import './header.scss'
import { locale } from '../../config/locale'
const globalSystem = require('../../config/global')

class HeaderComponent extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <React.Fragment>
        <div className='main-header'>
        </div>  
      </React.Fragment>
    )
  }
}

export default HeaderComponent