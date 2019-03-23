import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    <p>Expense dashboard page</p>
  </div>
);

const AddExpensePage = () => (
  <div>
    <p>Add expense page</p>
  </div>
);

const EditExpensePage = () => (
  <div>
    <p>Edit expense page</p>
  </div>
);

const HelpPage = () => (
  <div>
    <p>Help Page</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <div>
    <h1>Exspensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </div>
);

const routes = (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
