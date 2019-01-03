import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {

  state = {
   showingInfoWindow: false,  // Hides or the shows the infoWindow
   activeMarker: {},          // Shows the active marker upon click
   selectedPlace: {}          // Shows the infoWindow to the selected place upon a marker
  };

  /*
   The onMarkerClick is used to show the InfoWindow
   which is a component in the google-maps-react library
   which gives us the ability for a pop-up window showing details
   of the clicked place/marker.
  */
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  /*
    The onClose basically is for closing the InfoWindow
    once a user clicks on the close button on the infoWindow.
  */
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const {items} = this.props

    return (
      <div className="Map">
        <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{
           lat: 55.86430000000001,
           lng: 37.1181543
          }}
          >
            {items.map((item) => (
              <Marker key={item.name}
                onClick={this.onMarkerClick}
                name={item.name}
                position={{lat: item.lat, lng: item.lng}}
              />

            ))}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_SECRET)
})(MapContainer)
