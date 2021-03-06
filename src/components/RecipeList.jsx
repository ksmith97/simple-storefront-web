'use strict';
import styles from './RecipeList.scss';
import React, {PropTypes} from 'react';
import Recipe from './Recipe.jsx';

const RecipeList = ({recipes}) => {
    const submit = () => console.log('submit!');
    const recipeList = recipes.map((r, idx) => <Recipe key={idx} recipe={r} onSubmit={submit}/>);

    return (
      <div className={styles.recipeList}>
        {recipeList}
      </div>    
    );
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipeList;

