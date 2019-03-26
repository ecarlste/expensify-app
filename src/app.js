import 'normalize.css/normalize.css';
import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebase from './firebase/firebase';
import AppRouter, { history } from './routes/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { startSetExpenses } from './actions/expenses.action';
import { login, logout } from './actions/auth.action';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
  hasRendered = true;
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
      renderApp();
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
