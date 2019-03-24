import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses.action';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
