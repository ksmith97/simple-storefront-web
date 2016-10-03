import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.scss';
import React from 'react';
import {Link} from 'react-router';

const Home = ({children}) => (
  <div>
    <nav className={ styles.homeNavbar + ' navbar navbar-default navbar-fixed-top'}>
      <div className="container">
        <a className="navbar-brand" href="#">Storefront</a>

        <a className={styles.navbarRight + ' navbar-brand'} href="#">Login</a>
      </div>
    </nav>

    {children}
  </div>
);

export default Home;
