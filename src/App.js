import './App.css';
import React from 'react'
import {Link, Route} from 'react-router-dom'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'




function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className="logo">
          <Link to ="/">Home</Link>
        </div>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to ="/contact">Contactasdfasdfasdf</Link>
        
      </header>
        <Route exact path="/" />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
