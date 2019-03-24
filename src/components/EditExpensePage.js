import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses.action';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = props => {
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.editExpense(props.expense.id, expense);
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

const mapDispatchToProps = {
  editExpense
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
