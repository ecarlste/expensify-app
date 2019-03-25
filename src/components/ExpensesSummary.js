import numeral from 'numeral';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectExpenses, selectExpensesTotal } from '../selectors/expenses.selector';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
      </h1>
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
