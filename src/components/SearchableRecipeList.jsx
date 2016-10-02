'use strict'
import styles from './SearchableRecipeList.scss';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import RecipeList from './RecipeList.jsx';
import {filterRecipes} from '../actions';

const SearchableRecipeList = ({recipes, loading, filter, onSearchChange}) => (
  <div className="recipeListContainer">
    <div className={styles.search}>
      <input className="form-control" onChange={evtToValue.bind(null, onSearchChange)} placeholder="Search on name, ingredient."></input>
    </div>

    {loader(loading, (<RecipeList recipes={recipes} filter={filter} onSearchChange={onSearchChange}/>))}
  </div>);

SearchableRecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  filter: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired
};

const loader = (loading, component) => {
  if(loading) return "Loading...";
  
  return component;
};

const evtToValue = (cb, evt) => {
  return cb(evt.target.value);
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

export default connect(mapStateToProps, {onSearchChange: filterRecipes})(SearchableRecipeList);
