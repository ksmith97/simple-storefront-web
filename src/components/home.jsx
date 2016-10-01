import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.scss';
import { connect } from 'react-redux';
import RecipeList from './RecipeList.jsx';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const loader = (loading, component) => {
  if(loading) return "Loading...";
  
  return component;
};

const Home = ({recipes, loading}) => (
  <div className={styles.home}>
    <nav className={ styles.navbar + ' navbar navbar-default navbar-fixed-top'}>
      <div className="container">
        <a className="navbar-brand" href="#">Storefront</a>

        <a className={styles.navbarRight + ' navbar-brand'} href="#">Login</a>
      </div>
    </nav>

    {loader(loading, (<RecipeList recipes={recipes} />))}
  </div>
);

Home.propTypes = {
  params: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired
}

const mapStateToProps = (state = {recipes: []}) => {
  return {recipes: state.recipes.values, loading: state.recipes.loading};
}

export default connect(mapStateToProps)(Home);
