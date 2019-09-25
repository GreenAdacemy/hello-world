import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeaderComponent from './components/header/header';
import MenuBar from './components/menu-bar/menu-bar';
import { locale } from './config/locale'

const globalSystem = require('./config/global')

class App extends React.Component {
  constructor() {
    super()
    this.initGlobalSystem()
  }

  initGlobalSystem = () => {
    globalSystem.user = 'Ngo Hoai Phuong'
    globalSystem.lang = 'vi'
    locale.setLanguage(globalSystem.lang)
  }

  render() {
    return (
      <div className='App'>
        <MenuBar></MenuBar>
        <HeaderComponent></HeaderComponent>
        <div className='btn btn-primary'>{globalSystem.lang}</div>
      </div>
    )
  }
}

export default App;
