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
    const {locations} = this.props
    console.log('locations in Map: ' + locations);

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
            <Marker
              onClick={this.onMarkerClick}
              name={'My home.'}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>

            <Marker
              onClick={this.onMarkerClick}
              name={'My school.'}
              position={{lat: 55.868346, lng: 37.099723}}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>

            <Marker
              onClick={this.onMarkerClick}
              name={'Sport complecs.'}
              position={{lat: 55.859081, lng: 37.12836}}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>

            <Marker
              onClick={this.onMarkerClick}
              name={'City Hospital.'}
              position={{lat: 55.858924, lng: 37.12394}}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>

            <Marker
              onClick={this.onMarkerClick}
              name={'Bakery plant. One of the attractions of my city. ' +
               'Everyone loves the city trying to buy bread in this place, ' +
               'because it is very tasty.'}
              position={{lat: 55.865475, lng: 37.122159}}
            />
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
