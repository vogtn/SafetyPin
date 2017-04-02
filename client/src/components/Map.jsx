import React, {PropTypes} from 'react';

import GoogleMap from 'react-google-map';
import GoogleMapLoader from 'react-google-maps-loader';



const MY_API_KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';

const Map = ({googleMaps, secretData}) => (
	<div className='map'>
    {console.log(secretData[0])}
    <GoogleMap
      googleMaps={googleMaps}
      coordinates={[
        {
          title: secretData[0].offense_type,
          position: {
            lat: secretData[0].location.coordinates[1],
            lng:  secretData[0].location.coordinates[0],
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            marker.setAnimation(googleMaps.Animation.BOUNCE)

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div>
                  <h3>`+ secretData[0].hundred_block_location +`<h3>
                  <small>` +
                    secretData[0].offense_type
                    +
                  `</small>
                </div>
              `,
            })

            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, "click", () => {
              infoWindow.open(map, marker)
            })

            // Change icon when Marker will be hovered
            googleMaps.event.addListener(marker, "mouseover", () => {
              marker.setIcon(iconMarkerHover)
            })

            googleMaps.event.addListener(marker, "mouseout", () => {
              marker.setIcon(iconMarker)
            })

            // Open InfoWindow directly
            infoWindow.open(map, marker)
          },
        },
        {
          title: secretData[1].offense_type,
          position: {
            lat: secretData[1].location.coordinates[1],
            lng:  secretData[1].location.coordinates[0],
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            marker.setAnimation(googleMaps.Animation.BOUNCE)

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div>
                  <h3>`+ secretData[0].hundred_block_location +`<h3>
                  <small>` +
                    secretData[0].offense_type
                    +
                  `</small>
                </div>
              `,
            })

            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, "click", () => {
              infoWindow.open(map, marker)
            })

            // Change icon when Marker will be hovered
            googleMaps.event.addListener(marker, "mouseover", () => {
              marker.setIcon(iconMarkerHover)
            })

            googleMaps.event.addListener(marker, "mouseout", () => {
              marker.setIcon(iconMarker)
            })

            // Open InfoWindow directly
            infoWindow.open(map, marker)
          },
        }
      ]}
      center={{lat: 47.608013, lng: -122.335167}}
      zoom={14}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.SATELLITE)
      }}
    />
  </div>
)

Map.propTypes = {
  googleMaps: PropTypes.object.isRequired,
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY,
})







