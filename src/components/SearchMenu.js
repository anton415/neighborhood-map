import React, {Component} from 'react';
import './SearchMenu.css';
import { slide as Menu } from 'react-burger-menu'

class SearchMenu extends Component {
  constructor() {
    console.log('In SearchMenu constructor');
    super();
    this.handleChange = this.handleChange.bind(this);
    // this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField: '',
      items: []
    };
  }

  // submitHandler(evt) {
  //   console.log('In SearchMenu submitHandler');
  //   evt.preventDefault();
  //   // pass the input field value to the event handler passed
  //   // as a prop by the parent (App)
  //   this.props.handlerFromParant(this.state.inputField);
  //
  //   this.setState({
  //     inputField: ''
  //   });
  // }

  handleChange(event) {
    console.log('In SearchMenu handleChange event ' + event);
    this.setState({
      inputField: event
    });
    // this.props.handlerFromParant(this.state.inputField);
    this.props.handlerFromParant(event);
  }

  state = {
    items: []
  }

  filterList = (event) => {
    console.log('In SearchMenu filterList');
    var updatedList = this.props.items;
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().search(event.toLowerCase()) !== -1;
    })
    this.setState({items: updatedList});
    // this.submitHandler();
    // this.handleChange(event);
    this.props.handlerFromParant(updatedList);
  }

  componentWillMount = () => {
    console.log('In SearchMenu componentWillMount');
    this.setState({items: this.props.items})
  }

  render() {
    const {items} = this.state
    console.log('locations in SearchMenu: ' + items);
    // this.props.getFilteredItems(items);

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
