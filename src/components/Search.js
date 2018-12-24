import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="Title">Bart location</div>
        <div className="Search-field">
          <div className="Search-input">button</div>
          <div className="Filter-button">filter</div>
        </div>
        <div className="List-of-location">List of location</div>
      </div>
    )
  }
}
export default Search
