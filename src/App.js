import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/Map';
import SearchMenu from './components/SearchMenu';

class App extends Component {
  constructor() {
    console.log('In app constructor');
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: '',
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
      items: [],
      filteredItems: []
    };
  }

  handleData(data) {
    console.log('In app handleData data: ' + data);
    this.setState({
      filteredItems: data
    });
    // this.getFilteredItems(data);
  }

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

  getFilteredItems = (items) => {
    console.log('In app getFilteredItems ' + this.state.items);
    this.setState({items: items})
  }

  componentWillMount = () => {
    console.log('In app componentWillMount');
    this.setState({items: this.state.initialItems})
    this.setState({filteredItems: this.state.initialItems})
  }

  render() {
    console.log('In app: ' + this.state.items);
    //
    return (
      <div className="App">
        <SearchMenu items={this.state.items}  handlerFromParant={this.handleData}/>
        <MapContainer items={this.state.filteredItems}/>
      </div>
    );
  }
}

export default App;
