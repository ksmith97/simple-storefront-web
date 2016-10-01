import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.scss';
import { connect } from 'react-redux';
import RecipeList from './RecipeList.jsx';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import SearchableRecipeList from './SearchableRecipeList';
import {filterRecipes} from '../actions';

const loader = (loading, component) => {
  if(loading) return "Loading...";
  
  return component;
};

const Home = ({recipes, loading, filter, onSearchChange}) => (
  <div className={styles.home}>
    <nav className={ styles.navbar + ' navbar navbar-default navbar-fixed-top'}>
      <div className="container">
        <a className="navbar-brand" href="#">Storefront</a>

        <a className={styles.navbarRight + ' navbar-brand'} href="#">Login</a>
      </div>
    </nav>

    {loader(loading, (<SearchableRecipeList recipes={recipes} filter={filter} onSearchChange={onSearchChange}/>))}
  </div>
);

Home.propTypes = {
  params: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired
}

const stringContainsFragment = (str, frag) => {
  return str.toLowerCase().indexOf(frag.toLowerCase()) !== -1;
}

const recipeContainsString = (str, recipe) => {
  return stringContainsFragment(recipe.name, str) 
        || recipe.recipeIngredients.some(i => stringContainsFragment(i.ingredient.name, str));
}

const mapStateToProps = (state = {values: [], loading: false, filter: ''}) => {
  let recipes = state.recipes.values;
  const filter = state.recipes.filter;
  if (filter) {
    recipes = recipes.filter(recipeContainsString.bind(null, filter));
  }
  return {recipes, loading: state.recipes.loading};
}

export default connect(mapStateToProps, {onSearchChange: filterRecipes})(Home);
