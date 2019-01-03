import React, {Component} from 'react';
import './SearchMenu.css';
import { slide as Menu } from 'react-burger-menu'

class SearchMenu extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputField: '',
      items: []
    };
  }

  handleChange(event) {
    this.setState({
      inputField: event
    });
    this.props.handlerFromParant(event);
  }

  state = {
    items: []
  }

  filterList = (event) => {
    var updatedList = this.props.items;
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().search(event.toLowerCase()) !== -1;
    })
    this.setState({items: updatedList});
    this.props.handlerFromParant(updatedList);
  }

  componentWillMount = () => {
    this.setState({items: this.props.items})
  }

  render() {
    const {items} = this.state

    return (
      <Menu>
        <div className="Title">Bart location</div>
        <div className="Search-field">
          <form>
            <input type="text" placeholder="Search" onChange={(event) => this.filterList(event.target.value)}/>
          </form>
        </div>
        <div className="List-of-location">
          <ol className="listOfItems">
            {items.map((item) => (
              <li key={item.name}>
                {item.name}
              </li>
            ))}
          </ol>
        </div>
      </Menu>
    )
  }
}
export default SearchMenu
