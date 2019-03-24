import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses.action';
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
      <button
        onClick={() => {
          console.log(props);
          props.removeExpense({ id: props.expense.id });
          props.history.push('/');
        }}
      >
        Remove
      </button>
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
  editExpense,
  removeExpense
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
