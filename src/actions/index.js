import { getRecipesMock as getRecipes, submitLoginForm as submitLoginFormApi } from './api';
import { push } from 'react-router-redux';

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';

export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST
})

export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

export const fetchRecipesError = error => ({
  type: FETCH_RECIPES_ERROR,
  error
})

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';

export const receiveRecipes = recipes => ({
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

export const filterRecipes = filter => ({
  type: FILTER_RECIPES,
  filter: filter
});

export const LOGIN = 'LOGIN';

export const login = (userName) => ({
  type: LOGIN,
  user: {userName}
})

export const LOGIN_FORM_UPDATE = 'LOGIN_FORM_UPDATE';
export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const LOGIN_FORM_SUCCESS = 'LOGIN_FORM_SUCCESS';
export const LOGIN_FORM_FAIL = 'LOGIN_FORM_FAIL';

export const loginFormUpdate = (name, value) => ({
  type: LOGIN_FORM_UPDATE,
  name, value
});

export const loginFormSubmit = () => ({
  type: LOGIN_FORM_SUBMIT
})

export const loginFormSuccess = user => ({
  type: LOGIN_FORM_SUCCESS,
  user
});

export const loginFormFail = error => ({
  type: LOGIN_FORM_FAIL,
  error
})


export function submitLoginForm() {
  return (dispatch, getState) => {
    const form = getState().loginForm.values;
    dispatch(loginFormSubmit());
    
    submitLoginFormApi(form)
      .then((user) => {
        dispatch(loginFormSuccess(user));
        dispatch(login(form.username));
        dispatch(push('/'));
      })
      .catch(error => {
        dispatch(loginFormFail(error));
      });
  }
}
