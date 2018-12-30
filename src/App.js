import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/Map';
import SearchMenu from './components/SearchMenu';

class App extends Component {
  state = {
    locations: [
      {name: "My home.",
      lat: 55.86430000000001, lng: 37.1181543},
      {name: "My school.",
      lat: 55.868346, lng: 37.099723},
      {name: "Sport complecs.",
      lat: 55.859081, lng: 37.12836},
      {name: "City Hospital.",
      lat: 55.858924, lng: 37.12394},
      {name: "Bakery plant.",
      lat: 55.865475, lng: 37.122159}
    ]
  }


  render() {
    return (
      <div className="App">
        <SearchMenu locations={this.state.locations}/>
        <MapContainer locations={this.state.locations}/>
      </div>
    );
  }
}

export default App;
