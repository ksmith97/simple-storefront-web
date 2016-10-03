import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.scss';
import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

const UserProfile = ({user}) => {
  if(user.authenticated) {
    return <div className={styles.navbarRight + ' navbar-brand'}>Welcome, {user.userName}</div>
  }

  return <Link className={styles.navbarRight + ' navbar-brand'} to="/login">Login</Link>
}

const Home = ({user, children}) => (
  <div>
    <nav className={ styles.homeNavbar + ' navbar navbar-default navbar-fixed-top'}>
      <div className="container">
        <Link className="navbar-brand" to="/">Storefront</Link>

        <UserProfile user={user} />
      </div>
    </nav>

    {children}
  </div>
);

const mapStateToProps = (state = {user: {}}) => ({user: state.user});

export default connect(mapStateToProps)(Home);
