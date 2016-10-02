'use strict'
import styles from './SearchableRecipeList.scss';
import React, {PropTypes} from 'react';
import RecipeList from './RecipeList.jsx';

const evtToValue = (cb, evt) => {
  return cb(evt.target.value);
}

const SearchableRecipeList = ({recipes, filter, onSearchChange}) => (
  <div className="recipeListContainer">
    <div className={styles.search}>
      <input className="form-control" onChange={evtToValue.bind(null, onSearchChange)} placeholder="Search on name, ingredient."></input>
    </div>

    <RecipeList recipes={recipes} value={filter}/>
  </div>);

SearchableRecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onSearchChange: PropTypes.func.isRequired
};

export default SearchableRecipeList;
