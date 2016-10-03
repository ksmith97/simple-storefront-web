import React from 'react';
import { login } from '../actions';
import styles from './LoginForm.scss';
import { submitLoginForm, loginFormUpdate } from '../actions';
import { connect } from 'react-redux';

const LoginForm = ({values, onChange, onSubmit}) =>(
  <div className={styles.loginFormContainer}>
    <form className={styles.loginForm} onSubmit={onSubmit}>
      <h2>Login to Storefront</h2>
      <div className="form-group">
        <label>
          Username <input onChange={onChange.bind(null, 'username')} required="required" className="form-control" placeholder="Username"/>
        </label>
      </div>

      <div className="form-group">
        <label>
          Password <input type="password" onChange={onChange.bind(null, 'password')} required="required" className="form-control" placeholder="Password"/>
        </label>
      </div>

      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  </div>
);

const mapStateToProps = (state = {values: {}}) => {
  return {values: state.values};
}

const mapDispatchToProps = {
  onChange: (name, evt) => {
    return loginFormUpdate(name, evt.target.value);
  },
  onSubmit: function(evt) {
    evt.preventDefault();
    return submitLoginForm();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
