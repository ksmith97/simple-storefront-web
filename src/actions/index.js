import { getRecipesMock as getRecipes } from './api';

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';

export const fetchRecipesRequest = () => {
  return {
    type: FETCH_RECIPES_REQUEST
  }
}

export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

export const fetchRecipesError = (error) => {
  return {
    type: FETCH_RECIPES_ERROR,
    error
  }
}

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';

export const receiveRecipes = (recipes) => ({
    type: RECEIVE_RECIPES,
    recipes,
    receivedAt: Date.now()
  });


export const fetchRecipes = () => {

  return (dispatch) => {
    console.log('Fetching Recipes');
    dispatch(fetchRecipesRequest());
    
    return getRecipes()
      .then((recipes) => {
	console.log('Recipes', recipes);
        dispatch(receiveRecipes(recipes));
      })
      .catch((err) => {
        console.error(err);
        dispatch(fetchRecipesError(err.message));
      });
  }
}

export const FILTER_RECIPES = 'FILTER_RECIPES';

export const filterRecipes = (filter) => ({
  type: FILTER_RECIPES,
  filter: filter
});
