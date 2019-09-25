import React from 'react'
import './login.scss'
import { locale } from '../../config/locale';

class LoginPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
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