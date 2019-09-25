import React from 'react'
import './contact.scss'
import { locale } from '../../config/locale';

class ContactPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <h1>{locale.contact}</h1>
      </React.Fragment>
    )
  }
}

export default ContactPage