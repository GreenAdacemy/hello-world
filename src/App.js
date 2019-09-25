import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeaderComponent from './components/header/header';
import MenuBar from './components/menu-bar/menu-bar';
import { locale } from './config/locale'
import MainRouter from './config/router';
import Cookies from 'universal-cookie';
import { ListenService } from './services/listen';

const globalSystem = require('./config/global')
const cookie = new Cookies()

class App extends React.Component {
  constructor() {
    super()
    this.initGlobalSystem()
  }
  
  componentDidMount() {
    ListenService.onSwitchLang().subscribe(
      () => {
        this.setState({})
      }
    )
  }

  initGlobalSystem = () => {
    globalSystem.user = 'Ngo Hoai Phuong'
    globalSystem.lang = cookie.get('lang') !== undefined ? cookie.get('lang') : 'vi'
    locale.setLanguage(globalSystem.lang)
  }

  render() {
    return (
      <div className='App'>
        <MenuBar></MenuBar>
        <HeaderComponent></HeaderComponent>
        <MainRouter></MainRouter>
      </div>
    )
  }
}

export default App;
