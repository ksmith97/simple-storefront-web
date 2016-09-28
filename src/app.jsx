import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.scss';
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import Home from './components/home.jsx';
import { Provider } from 'react-redux';
import store from './store';
import {syncHistoryWithStore} from 'react-router-redux';

const ItWorks = () => {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
      </div>
    )
}

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}
