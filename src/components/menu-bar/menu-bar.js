import React from 'react'
import './menu-bar.scss'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { locale } from '../../config/locale'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie';
import { ListenService } from '../../services/listen';

const globalSystem = require('../../config/global')

class MenuBar extends React.Component {
  constructor() {
    super()
  }

  switchLang = (lang) => {
    let cookie = new Cookies()
    globalSystem.lang = lang
    locale.setLanguage(lang)
    this.setState({})
    cookie.set('lang', lang)
    ListenService.switchLang(lang)
  }

  checkCurrentLangActive = (lang) => {
    if(globalSystem.lang === lang) {
      return <FontAwesomeIcon icon={faCheck} className='icon mr-1'/>
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg" className='main-menu'>
          <Navbar.Brand href="/">Green Adacemy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">{locale.home}</Nav.Link>
              <NavDropdown title={locale.course} id="basic-nav-dropdown">
                <NavDropdown.Item href="/course">Action</NavDropdown.Item>
                <NavDropdown.Item href="/course">Another action</NavDropdown.Item>
                <NavDropdown.Item href="/course">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/course">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">{locale.contact}</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder={locale.search} className="mr-sm-2" />
              <Button variant="outline-success" className='w100'>{locale.search}</Button>
            </Form>
            <Nav className="mr-auto">
              <NavDropdown title={locale.lang}>
                <NavDropdown.Item onSelect={ () => this.switchLang('vi') } >
                  { this.checkCurrentLangActive('vi') }
                  Tiếng Việt
                </NavDropdown.Item>
                <NavDropdown.Item onSelect={ () => this.switchLang('en') }>
                  { this.checkCurrentLangActive('en') }
                  English
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default MenuBar