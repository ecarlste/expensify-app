import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { addExpense } from './actions/expenses.action';
import { setTextFilter } from './actions/filters.action';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));

setTimeout(() => {
  store.dispatch(setTextFilter('gas'));
}, 3000);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
