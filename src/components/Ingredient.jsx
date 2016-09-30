'use strict';
import React, {PropTypes} from 'react';

const Ingredient = ({ingredient}) => {
  return (
    <div className="ingredient">
      <i>{ingredient.quantity} {ingredient.ingredient.measure}</i> of <b>{ingredient.ingredient.name}</b>
    </div>
  );
}

Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired
}

export default Ingredient;
