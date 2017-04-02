import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import Map from '../components/Map.jsx';


class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      secretData: [],
      userLat: 47.608013,
      userLng: -122.335167
    };
  }

  componentDidMount() {
    //redefine this scope to main component
    var self = this;


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(findPosition);
    } 

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.response.message);
        var newData = data.map(element =>{
          return(
              {
                title: element.offense_type,
                position: {
                  lat: element.location.coordinates[1],
                  lng:  element.location.coordinates[0],
                },
                onLoaded: (googleMaps, map, marker) => {
                  // Set Marker animation
                  marker.setAnimation(googleMaps.Animation.DROP)

                  // Define Marker InfoWindow
                  const infoWindow = new googleMaps.InfoWindow({
                    content: `
                      <div>
                        <h3>`+ element.hundred_block_location +`<h3>
                        <small>` +
                          element.offense_type
                          +
                        `</small>
                      </div>
                    `,
                  })

                  // Open InfoWindow when Marker will be clicked
                  googleMaps.event.addListener(marker, "click", () => {
                    infoWindow.open(map, marker)
                  })
                },
              }
          )
        })
        console.log(newData);
        this.setState({
          secretData: newData
        });
      }
    });
    xhr.send();

    //define lat lng

    function findPosition(position){
      if(position.coords.latitude){
        self.setState({
          userLat : position.coords.latitude || this.state.userLat,
          userLng : position.coords.longitude || this.state.longitude
        })
      }
        // userLat: position.coords.latitude,
        // userLng: position.coords.longitude
    }

  }

  render() {
    return (
      <div>
        {console.log(this.state.secretData.length)}
            {(this.state.secretData.length === 0) ? <div>loading...</div> : <Map secretData={this.state.secretData} userLat={this.state.userLat} userLng={this.state.userLng}/> }
      </div>
    );
  }

}

export default DashboardPage;