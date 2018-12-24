import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <Map/>
      </div>
    );
  }
}

export default App;
