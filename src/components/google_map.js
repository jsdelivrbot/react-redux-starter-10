import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";

export default(props) => {
  // console.log('props', props);
  return (
    <div>
      <GoogleMapLoader
        containerElement={ <div style={{height: "100%"}} />}
        googleMapElement={
          <GoogleMap
            ref={(map) => {}}
            defaultCenter={{ lat: props.lat, lng: props.lon}}
            defaultZoom={12} />
      }/>
    </div>
  );
}

// class GoogleMap extends Component {
//   componentDidMount() {
//     new google.maps.Map(this.refs.map, {
//       zoom: 12,
//       center: {
//         lat: this.props.lat,
//         lng: this.props.lon
//       }
//     });
//   }
//
//   render() {
//     return <div ref="map"></div>;
//   }
// }
//
// export default GoogleMap;
