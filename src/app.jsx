import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.scss';
import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Home from './components/home.jsx';
import SearchableRecipeList from './components/SearchableRecipeList.jsx';
import { Provider } from 'react-redux';
import store from './store';
import {syncHistoryWithStore} from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Home}>
            <IndexRoute component={SearchableRecipeList}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}
