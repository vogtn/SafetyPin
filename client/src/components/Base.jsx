import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import FlatButton from 'material-ui/FlatButton';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout"><FlatButton label='Log Out'/></Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login"><FlatButton label='Log in'/></Link>
          <Link to="/signup"><FlatButton label='Sign up'/></Link>
        </div>
      )}
      <div className="top-bar-left">
        <IndexLink to="/">
          <FlatButton label='Safety Pin'/>
        </IndexLink>
      </div>


    </div>
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
