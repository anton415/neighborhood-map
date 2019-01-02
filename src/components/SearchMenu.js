import React, {Component} from 'react';
import './SearchMenu.css';
import { slide as Menu } from 'react-burger-menu'

class SearchMenu extends Component {
  render() {
    const {items} = this.props
    console.log('locations in SearchMenu: ' + items);

    return (
      <Menu>
        <div className="Title">Bart location</div>
        <div className="Search-field">
          <form>
            <input type="text" placeholder="Search"/>
          </form>
        </div>
        <div className="List-of-location">
          <ol className="listOfItems">
            {items.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </Menu>
    )
  }
}
export default SearchMenu
