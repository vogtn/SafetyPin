import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import FlatButton from 'material-ui/FlatButton';


const Base = ({ children }) => (
<div>
  <div className='navbar-fixed z-depth-5'>
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
        <div className="brand-logo center ">
          <IndexLink to="/">
            <FlatButton className='pulse' labelStyle={{ fontSize: '30px' }} label='Safety Pin' secondary={true}/>
          </IndexLink>
        </div>
      </div>
    {children}
    </nav>
  </div>
      <div className="footer-copyright footer">
        <div className="container">
        <a className="grey-text center" href="#!">Made with &hearts; by Nic, Mark, & Jack</a>
        <a className="grey-text right" href="#!">© 2017 Copyright</a>
        </div>
      </div>
</div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
