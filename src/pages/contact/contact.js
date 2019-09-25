import React from 'react'
import './contact.scss'
import { locale } from '../../config/locale';
import { ListenService } from '../../services/listen';

class ContactPage extends React.Component {
  constructor() {
    super()
    console.log(locale.getLanguage())
  }

  componentDidMount() {
    ListenService.onSwitchLang().subscribe(
      () => {
        this.setState({})
      }
    )
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