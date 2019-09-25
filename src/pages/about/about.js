import React from 'react'
import './about.scss'
import { locale } from '../../config/locale'

class AboutPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <h1>{locale.about}</h1>
      </React.Fragment>
    )
  }
}

export default AboutPage