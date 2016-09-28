const _ = require('lodash');

export default (state = { user: {userName: 'Anonymous', state: 'LOGGED_OUT' }}, action) => {
    switch(action.type) {
      case: 'LOGGING_IN':
        return _.merge(state, {user: {state: action.type}});
      case 'LOGIN_SUCCESS':
        return _.merge(state, {user: {state: action.type}}, {user: action.value});
      case 'LOGIN_FAIL':
        return _.merge(state, {user: {state: action.type}});
    }
}
