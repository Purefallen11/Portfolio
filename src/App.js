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
      <Navbar light className="container">
        <NavbarToggler onClick={clickHandler} className="mr-2" size="md"/>
        <NavbarBrand><Link to="/" className="navbar-brand">Steve Rivera Hernandez</Link></NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="dropdown-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </NavItem>
            <NavItem className="dropdown-item">
              <Link to="/about" className="nav-link">About</Link>
            </NavItem>
            <NavItem className="dropdown-item">
              <Link to ="/contact" className="nav-link">Contact</Link>
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
