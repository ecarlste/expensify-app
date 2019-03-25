import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { selectExpenses } from '../selectors/expenses.selector';

export const ExpenseList = props => (
  <div>
    <h1>Expense list</h1>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseList);
