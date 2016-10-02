import React from 'react';
import { login } from '../actions';
import styles from './LoginForm.scss';

const LoginForm = () =>(
  <div className={styles.loginFormContainer}>
    <form className={styles.loginForm} onSubmit={login}>
      <h2>Login to Storefront</h2>
      <div className="form-group">
        <label>
          Username <input onChange={evt=>console.log('Username', evt.target.value)} required="required" className="form-control" placeholder="Username"/>
        </label>
      </div>

      <div className="form-group">
        <label>
          Password <input onChange={evt=>console.log('Password', evt.target.value)} required="required" className="form-control" placeholder="Password"/>
        </label>
      </div>

      <div className="form-check">
        <label>
          <input type="checkbox" onChange={evt=>console.log('Password', evt.target.value)} className="form-check-inline"/> Remember me
        </label>
      </div>

      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  </div>
);

export default LoginForm;
