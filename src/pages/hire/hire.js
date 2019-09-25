import React from 'react'
import './hire.scss'
import { locale } from '../../config/locale';
import { ListenService } from '../../services/listen';

class HirePage extends React.Component {
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
        <h1>{locale.hiring}</h1>
      </React.Fragment>
    )
  }
}

export default HirePage