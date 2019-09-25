import React from 'react'
import './menu-bar.scss'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { locale } from '../../config/locale'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const globalSystem = require('../../config/global')

class MenuBar extends React.Component {
  constructor() {
    super()
  }

  switchLang = (lang) => {
    globalSystem.lang = lang
    locale.setLanguage(lang)
    this.setState({})
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
          <Navbar.Brand href="#home">Green Adacemy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">{locale.home}</Nav.Link>
              <Nav.Link href="#link">{locale.contact}</Nav.Link>
              <NavDropdown title={locale.course} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
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