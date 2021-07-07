import './App.css';
import { Link, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </header>
      <Switch>
        <Route path="/"></Route>
        <Route path="projects"></Route>
      </Switch>
    </div>
  );
}

export default App;
