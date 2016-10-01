'use strict';
import _ from 'lodash';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer as routing} from 'react-router-redux';
import * as actions from '../actions/index.js';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const initialState = {
  user: {
    userName: 'Anonymous',
    state: 'LOGGED_OUT'
  },
  recipes: {
    values: [],
    loading: false,
    filter: ''
  }
}

function recipes(state = {}, action) {
  switch(action.type) {
    case actions.FETCH_RECIPES_REQUEST:
      return Object.assign({}, state, {loading: true});
    case actions.FETCH_RECIPES_SUCCESS:
      return Object.assign({}, state, {values: action.recipes});
    case actions.FETCH_RECIPES_ERROR:
      return Object.assign({}, state, {loading: false, error: action.error});
    case actions.RECEIVE_RECIPES:
      return Object.assign({}, state, {loading: false, values: action.recipes});
    case actions.FILTER_RECIPES:
      return Object.assign({}, state, {filter: action.filter});
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
      combineReducers({user, recipes, routing}), 
      initialState, 
      applyMiddleware(thunkMiddleware, createLogger()));

export default store;

store.dispatch(actions.fetchRecipes()).then(() => {
  console.log('Recipes dispatch finished');
  console.log('State', store.getState());
});

