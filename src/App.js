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
    ],
    initialItems: [
      "Apples",
      "Broccoli",
      "Chicken",
      "Duck",
      "Eggs",
      "Fish",
      "Granola",
      "Hash Browns"
    ],
    items: []
  }

  filterList = (event) => {
    console.log('In app filterList');
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    })
    this.setState({items: updatedList})
  }

  getInitialState = () => {
    console.log('In app getInitialState');
    return {
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      items: []
    }
  }

  componentWillMount = () => {
    console.log('In app componentWillMount');
    this.setState({items: this.state.initialItems})
  }

  render() {
    console.log('In app: ' + this.state.items);
    return (
      <div className="App">
        <SearchMenu items={this.state.items}/>
        <MapContainer items={this.state.items}/>
      </div>
    );
  }
}

export default App;
