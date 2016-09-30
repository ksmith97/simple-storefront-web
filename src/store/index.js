import _ from 'lodash';
import {createStore, combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

const initialState = {
  user: {
    userName: 'Anonymous',
    state: 'LOGGED_OUT'
  },
  recipes: [{
    id: 1,
    name: 'Lemonade',
    price: '1.0',
    ingredients: [{
      id: 1,
      quantity: '2.0',
      name: 'Lemon',
      price: '0.1',
      measure: 'Juice',
      stock: '100.0',
    }, {
      id: 2,
      quantity: '0.5',
      name: 'Sugar',
      price: '0.1',
      measure: 'Cup',
      stock: '100.0',
    }, {
      id: 3,
      quantity: '4',
      name: 'Water',
      price: '0.0',
      measure: 'Cup',
      stock: '100.0',
    }]
  }, {
    id: 1,
    name: 'Orange Juice',
    price: '2.0',
    ingredients: [{
      id: 1,
      quantity: '2.0',
      name: 'Lemon',
      price: '0.1',
      measure: 'Juice',
      stock: '100.0',
    }, {
      id: 2,
      quantity: '0.5',
      name: 'Sugar',
      price: '0.1',
      measure: 'Cup',
      stock: '100.0',
    }, {
      id: 3,
      quantity: '4',
      name: 'Water',
      price: '0.0',
      measure: 'Cup',
      stock: '100.0',
    }]
  }]
}

function recipes(state = [], action) {
  return state;
}

function user(state = {user: {userName: 'Anonymous', state: 'LOGGED_OUT'}}, action) {
  switch(action.type) {
    case 'LOGGING_IN':
      return _.merge(state, {user: {state: action.type}});
    case 'LOGIN_SUCCESS':
      return _.merge(state, {user: {state: action.type}}, {user: action.value});
    case 'LOGIN_FAIL':
      return _.merge(state, {user: {state: action.type}});
    default:
      return state;
  }
}

export default createStore(combineReducers({user, recipes, routing: routerReducer}), initialState);
