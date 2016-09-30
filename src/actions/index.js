import { getRecipes } from './api';

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';

export const fetchRecipesRequest = () => {
  return {
    type: FETCH_RECIPES_REQUEST
  }
}

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';

export const fetchRecipesSuccess = () => {
  return {
    type: FETCH_RECIPES_SUCCESS
  }
}

export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

export const fetchRecipesError = () => {
  return {
    type: FETCH_RECIPES_ERROR
  }
}

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';

export const receiveRecipes = (recipes) => {
  return {
    type: RECEIVE_RECIPES,
    recipes,
    receivedAt: Date.now()
  }
}

export const fetchRecipes = () => {

  return (dispatch) => {
    dispatch(fetchRecipesRequest());
    
    return getRecipes()
      .then((recipes) => {
        dispatch(receiveRecipes(recipes));
      })
      .catch((err) => {
        console.log('An error occured when retrieving recipes.', err);
        dispatch(fetchRecipesError(err.message));
      });
  }
}
