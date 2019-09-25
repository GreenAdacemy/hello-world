import React from 'react'
import './header.scss'
import { locale } from '../../config/locale'
import SlideShow from '../slide/silde'

const globalSystem = require('../../config/global')

class HeaderComponent extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <React.Fragment>
        <div className='main-header'>
          <SlideShow></SlideShow>
        </div>  
      </React.Fragment>
    )
  }
}

export default HeaderComponent