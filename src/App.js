import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap'


function App() {
  const [collapsed, setCollapsed] = useState(true)

  const clickHandler = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div> 
      <Navbar color="faded" light>
        <NavbarBrand className="mr-auto">
          <Link to="/">Home</Link>
        </NavbarBrand>
        <NavbarToggler onClick={clickHandler} size="lg" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar size="lg">
            <NavItem>
              <Link to="/projects">Projects</Link>
            </NavItem>
            
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to ="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        
        <Route exact path="/" />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
