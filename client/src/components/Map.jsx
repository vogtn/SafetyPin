import React, {PropTypes} from 'react';

import GoogleMap from 'react-google-map';
import GoogleMapLoader from 'react-google-maps-loader';



const MY_API_KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';

const Map = ({googleMaps}) => (
	<div className='map'>
    <GoogleMap
      googleMaps={googleMaps}
      coordinates={[
        {
          title: "Seattle",
          position: {
            lat: 47.608013,
            lng:  -122.335167,
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            marker.setAnimation(googleMaps.Animation.BOUNCE)

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div>
                  <h3>Seattle<h3>
                  <div>
                    Toulouse is the capital city of the southwestern
                    French department of Haute-Garonne,
                    as well as of the Occitanie region.
                  </div>
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







