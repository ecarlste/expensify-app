import numeral from 'numeral';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectExpenses, selectExpensesTotal } from '../selectors/expenses.selector';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling{' '}
          <span>{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const expenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesTotal: selectExpensesTotal(expenses),
    expenseCount: expenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
