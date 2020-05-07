import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NavBar from './NavBar';
import Extra from './pages/Extra';

import NotFoundPage from './pages/NotFoundPage';
import Contentlist from './pages/contentlist';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
            <Route path="/" component= {HomePage} exact />
          <Route path="/about" component = {About} />
          <Route path="/extra/:name" component = {Extra} />
          <Route path="/contentlist" component = {Contentlist} />
          <Route component = {NotFoundPage} />
            </Switch>
          </div>
          </div>
      </Router>
    )
  }
}

export default App;
