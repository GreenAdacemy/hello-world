import React from 'react'
import './hire.scss'
import { locale } from '../../config/locale';

class HirePage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
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