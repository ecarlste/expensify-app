import 'normalize.css/normalize.css';
import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebase from './firebase/firebase';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { startSetExpenses } from './actions/expenses.action';

const store = configureStore();

store.dispatch(startSetExpenses());

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in');
  } else {
    console.log('logged out');
  }
});
