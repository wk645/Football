import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css';
import Rankings from './components/Rankings'
import Teams from './components/Teams'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/rankings" component={Rankings} />

      </div>
    );
  }
}

export default App;