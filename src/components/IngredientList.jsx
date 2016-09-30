'use strict';
import Ingredient from './Ingredient';
import React, {PropTypes} from 'react';

const IngredientList = ({ingredients}) => {
    const ingredientList = ingredients.map((i, idx)=><Ingredient key={idx} ingredient={i}/>);

    return (
      <div>
        <h3>Ingredients</h3>
        <div className="ingredients">
          {ingredientList}
        </div>
      </div>
    );
}

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired
}

export default IngredientList;
