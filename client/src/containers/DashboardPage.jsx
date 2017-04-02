import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import Map from '../components/Map.jsx';
import FontAwesome from 'react-fontawesome';


class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secretData: []

    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.response.message);
        this.setState({
          secretData: data
        });
      }
    });
    xhr.send();
  }

  render() {
    return (
<div>
  {console.log(this.state.secretData.length)}
  {((this.state.secretData.length === 0) ? <FontAwesome id='load' className='spin' name='spinner' spin size='4x'/> : <Map secretData={this.state.secretData}  />  )}
      <Dashboard secretData={this.state.secretData} />
</div>
    );
  }

}

export default DashboardPage;