import React, {Component} from 'react';
import './SearchMenu.css';
import { slide as Menu } from 'react-burger-menu'

class SearchMenu extends Component {
  render() {
    return (
      <Menu>
        <div className="Title">Bart location</div>
        <div className="Search-field">
          <div className="Search-input">button</div>
          <div className="Filter-button">filter</div>
        </div>
        <div className="List-of-location">List of location</div>
      </Menu>
    )
  }
}
export default SearchMenu
