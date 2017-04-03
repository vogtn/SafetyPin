import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
<div>
  <Card className="container center">
    <form id='signupForm' action="/" onSubmit={onSubmit}>
      <h3 className="card-heading">Sign Up</h3>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
          underlineStyle={{display: 'none'}}
        />
      </div>

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
        <button className="waves-effect waves-light black btn">Sign Up</button>
      </div>

      <CardText>Already have an account? <Link style={{color:'red'}} to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>


</div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
