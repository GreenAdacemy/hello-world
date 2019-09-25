import React from 'react'
import './course.scss'
import { locale } from '../../config/locale';

class CoursePage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <h1> {locale.course} </h1>
      </React.Fragment>
    )
  }
}

export default CoursePage