import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/Map';
import SearchMenu from './components/SearchMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchMenu/>
        <MapContainer/>
      </div>
    );
  }
}

export default App;
