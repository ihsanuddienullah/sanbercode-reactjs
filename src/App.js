import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home, About, Users } from './views';
import './App.css';

function App() {
  const stylefooter = {
    color: "white",
    backgroundColor : "black",
    height: "50px",
    margin: "0 auto",
    
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/topics">
            <Users/>
          </Route>
        </Switch>
        <footer>
          <h1 style={stylefooter}>Contact Us</h1>
        </footer>
      </div>
    </Router>
  );
}

export default App;
