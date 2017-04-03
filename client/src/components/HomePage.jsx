import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';
import { Parallax, Background } from 'react-parallax';

const HomePage = () => (
<div>
	<div id='homeDiv' className='homePage'>
    <div id='cardAbout' className="card-content black-text center">
      <h4 className="card-title">About</h4>
      <p><span style={{color:'red'}}>SAFETY</span> is a central ingredient to healthy living and a healthy mind.  <span style={{color:'red'}}>Safety Pin</span> aims to serve you the piece-of-mind you deserve so you can comfortably navigate your city. Whether you are at school, dining out, or simply planning a late night walk, <span style={{color:'red'}}>Safety Pin</span> queries your location in real time to personalize the experience around you. Then, you will be given a map with <span style={{color:'red'}}>pins</span> of the latest crimes reported and their respective positions so you can plan your route and get there <span style={{color:'red'}}>safely!</span></p>
    </div>
	</div>
	
</div>

);

export default HomePage;