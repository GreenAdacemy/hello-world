import React from 'react'
import './login.scss'
import { ListenService } from '../../services/listen';
import { locale } from '../../config/locale';

class LoginPage extends React.Component {
  constructor() {
    super()
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
        <h1>{locale.login}</h1>
      </React.Fragment>
    )
  }
}

export default LoginPage