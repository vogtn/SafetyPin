import React, {PropTypes} from 'react';

import GoogleMap from 'react-google-map';
import GoogleMapLoader from 'react-google-maps-loader';



const MY_API_KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';

const Map = ({googleMaps, secretData, userLng, userLat}) => (
	<div className='map'>
    <GoogleMap
      googleMaps={googleMaps}
      coordinates={[
        secretData[1], secretData[2], secretData[3], secretData[4], secretData[5],
        secretData[6], secretData[7], secretData[8], secretData[9], secretData[10],
        secretData[11], secretData[12], secretData[13], secretData[14], secretData[15],
        secretData[16], secretData[17], secretData[18], secretData[19], secretData[20],
        secretData[21], secretData[22], secretData[23], secretData[24], secretData[25],
        secretData[26], secretData[27], secretData[28], secretData[29], secretData[30],
        secretData[31], secretData[32], secretData[33], secretData[34], secretData[35],
        secretData[36], secretData[37], secretData[38], secretData[39], secretData[40],
        secretData[41], secretData[42], secretData[43], secretData[44], secretData[45],
        secretData[46], secretData[47], secretData[48], secretData[49], secretData[50],
      ]}
      center={{lat: userLat, lng: userLng}}
      zoom={14}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
      }}
    />
  </div>
)

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY,
})







