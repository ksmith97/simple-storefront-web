'use strict';
import React, {PropTypes} from 'react';
import Recipe from './Recipe.jsx';

const RecipeList = ({recipes}) => {
    const submit = () => console.log('submit!');
    const recipeList = recipes.map((r) => <Recipe recipe={r} onSubmit={submit}/>);

    return (
      <div className="container">
        <div className="row">
          {recipeList}
        </div>    
      </div>
    );
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipeList;

