import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from '../services/auth';
import HomePage from '../pages/home/home';
import LoginPage from '../pages/login/login';
import CoursePage from '../pages/course/course';
import HirePage from '../pages/hire/hire';
import ContactPage from '../pages/contact/contact';
import AboutPage from '../pages/about/about';

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' render={
        () => (
          <Auth
            orRedirectTo='/login' orRender={
              <HomePage></HomePage>
            }></Auth>
        )
      }></Route>
      <Route path='/login' component={LoginPage}></Route>
      <Route path='/course' component={CoursePage}></Route>
      <Route path='/hiring' component={HirePage}></Route>
      <Route path='/contact' component={ContactPage}></Route>
      <Route path='/about' component={AboutPage}></Route>
      <Route path='/home' component={HomePage}></Route>
    </Switch>
  </main>
)
export default MainRouter