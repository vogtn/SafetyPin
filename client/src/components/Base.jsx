import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';


const Base = ({ children }) => (
<div id='homeDiv'>
  <div className='navbar-fixed z-depth-1'>
    <nav>
      <div className="nav-wrapper white">
        {Auth.isUserAuthenticated() ? (
          <div className="right">
            <Link to="/logout"><FlatButton label='Log Out'/></Link>
          </div>
        ) : (
          <div className="right">
            <Link to="/login"><FlatButton label='Log in'/></Link>
            <Link to="/signup"><FlatButton label='Sign up'/></Link>
          </div>
        )}
        <div className="brand-logo center">
          <IndexLink to="/">
            <FlatButton  id='safe' labelStyle={{ fontSize: '40px', color:'red', fontFamily: 'Fjalla One' }}  label='Safety Pin' secondary={true}/>
          </IndexLink>
        </div>
        <div>
        </div>
      </div>
    {children}
    </nav>
  </div>
  <div className="footer z-depth-5">© 2017 made with &hearts; from Nic, Mark, & Jack </div>
</div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
