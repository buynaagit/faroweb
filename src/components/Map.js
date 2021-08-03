import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ lat: 47.900238, lng: 106.909943 }],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    const mapStyles = {
      width: "100%",
      height: "70%",
    };
    return (
      <div className="contact_map" id="myAdress">
        <Map
          google={this.props.google}
          zoom={17}
          initialCenter={{ lat: 47.900238, lng: 106.909943 }}
          style={mapStyles}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBCB4y0SztfLo236n4JECwTvIQd-VecF2Y",
})(MapContainer);
