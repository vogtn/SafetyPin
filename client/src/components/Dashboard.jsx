import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Map from 'google-maps-react'


const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  </Card>

);


export default Dashboard;