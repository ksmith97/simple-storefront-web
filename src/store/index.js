import _ from 'lodash';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer } from 'react-router-redux';
import * as actions from '../actions/index.js';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const initialState = {
  user: {
    userName: 'Anonymous',
    state: 'LOGGED_OUT'
  },
  recipes: [{
      "id": 1,
      "name": "Lemonade",
      "price": 1,
      "recipeIngredients": [
        {
          "id": 1,
          "recipe_id": 1,
          "ingredient_id": 1,
          "quantity": 2,
          "ingredient": {
            "id": 1,
            "name": "Lemon",
            "price": 0.1,
            "measure": "Juice",
            "stock": 100,
            "ingredientcol": null
          }
        },
        {
          "id": 2,
          "recipe_id": 1,
          "ingredient_id": 2,
          "quantity": 0.5,
          "ingredient": {
            "id": 2,
            "name": "Sugar",
            "price": 0.1,
            "measure": "Cup",
            "stock": 100,
            "ingredientcol": null
          }
        },
        {
          "id": 3,
          "recipe_id": 1,
          "ingredient_id": 3,
          "quantity": 4,
          "ingredient": {
            "id": 3,
            "name": "Water",
            "price": 0,
            "measure": "Cup",
            "stock": 100,
            "ingredientcol": null
          }
        }
      ],
      "products": []
    }]
}

function recipes(state = [], action) {
  switch(action.type) {
    case actions.FETCH_RECIPES_REQUEST:
    case actions.FETCH_RECIPES_SUCCESS:
      return Object.assign({}, state, {recipes: action.response});
    case actions.FETCH_RECIPES_ERROR:
      return Object.assign({}, state, {recipes: action.response, error: action.error});
    case actions.RECEIVE_RECIPES:
      return Object.assign({}, state, {recipies: action.response});
    default:
      return state;
  }
}

function user(state = {user: {userName: 'Anonymous', state: 'LOGGED_OUT'}}, action) {
  switch(action.type) {
    case 'LOGGING_IN':
      return _.merge({}, state, {user: {state: action.type}});
    case 'LOGIN_SUCCESS':
      return _.merge({}, state, {user: {state: action.type}}, {user: action.value});
    case 'LOGIN_FAIL':
      return _.merge({}, state, {user: {state: action.type}});
    default:
      return state;
  }
}

const store = createStore(
      combineReducers({user, recipes, routing: routerReducer}), 
      initialState, 
      applyMiddleware(thunkMiddleware, createLogger));

export default store;

store.dispatch(actions.fetchRecipes());

