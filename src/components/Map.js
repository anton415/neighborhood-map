import React, {Component} from 'react';
import './Map.css';
import {Map, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
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
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: -1.2884,
           lng: 36.8233
          }}
        />
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_SECRET)
})(MapContainer)
