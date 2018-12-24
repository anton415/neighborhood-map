import React, {Component} from 'react';
import './Map.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className="Map">
        <div className="Menu-button">Menu button</div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAI8JiOs_omt6c611mBqwN8IYxvPSttJ9k' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
        </GoogleMapReact>
      </div>
    )
  }
}
export default Map
