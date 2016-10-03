import React from 'react';
import { login } from '../actions';
import styles from './LoginForm.scss';
import { submitLoginForm, loginFormUpdate } from '../actions';
import { connect } from 'react-redux';

const nbsp = '\u00a0';

const ErrorMessage = ({message}) => (
  <div className="form-group">
    <strong className={styles.loginError}>{message ? 'Login Failed' : nbsp}</strong>
  </div>);

const LoginForm = ({form, onChange, onSubmit}) =>(
  <div className={styles.loginFormContainer}>
    <form className={styles.loginForm} onSubmit={onSubmit}>
      <h2>Login to Storefront</h2>

      <div className="form-group">
        <label>
          Username <input value={form.values.userName} onChange={onChange.bind(null, 'username')} required="required" className="form-control" placeholder="Username"/>
        </label>
      </div>

      <div className="form-group">
        <label>
          Password <input value={form.values.password} type="password" onChange={onChange.bind(null, 'password')} required="required" className="form-control" placeholder="Password"/>
        </label>
      </div>

      <ErrorMessage message={form.error}/>

      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  </div>
);

const mapStateToProps = (state = {values: {}}) => {
  return {form: state.loginForm};
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
