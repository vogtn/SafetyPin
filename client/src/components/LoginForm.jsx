import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (
<div>
  <Card className="container center">
    <form id='loginForm' action="/" onSubmit={onSubmit}>
      <h3 className="card-heading">Login</h3>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
          underlineStyle={{display: 'none'}}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
          underlineStyle={{display: 'none'}}
        />
      </div>

      <div className="button-line">
        <button className="waves-effect waves-light black btn">Login</button>
      </div>

      <CardText>Don't have an account? <Link style={{color:'red'}} to={'/signup'}>Create one</Link>.</CardText>
    </form>
  </Card>
</div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
