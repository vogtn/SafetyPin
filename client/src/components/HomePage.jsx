import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FontAwesome from 'react-fontawesome';

const HomePage = () => (
	<div className='home'>
	<Divider />
	 <div className="divider"></div>
            <div className="card">
                <CardTitle className='cardTitle' title="App" subtitle="this is homepage." />
            </div>
    </div>

);

export default HomePage;