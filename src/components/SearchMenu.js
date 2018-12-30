import React, {Component} from 'react';
import './SearchMenu.css';
import { slide as Menu } from 'react-burger-menu'

class SearchMenu extends Component {
  render() {
    const {locations} = this.props
    console.log('locations in SearchMenu: ' + locations);

    return (
      <Menu>
        <div className="Title">Bart location</div>
        <div className="Search-field">
          <form>
            <label>
              <input type="text" name="name" />
              <input type="submit" value="Filter" />
            </label>

          </form>
        </div>
        <div className="List-of-location">List of location</div>
      </Menu>
    )
  }
}
export default SearchMenu
