'use strict';
import styles from './Recipe.scss';
import React, {PropTypes} from 'react';
import IngredientList from './IngredientList.jsx';

const Recipe = ({recipe, onSubmit}) => (
      <div className={styles.recipe}>

        <div className={styles.top}>

          <h2>{ recipe.name }</h2>

          <p className={styles.price}>${ recipe.price }</p>

        </div>

        <div className={styles.bottom}>
          <IngredientList ingredients={recipe.recipeIngredients} />
        </div>

    </div>
);


Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Recipe
