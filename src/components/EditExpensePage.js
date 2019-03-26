import React from 'react';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses.action';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onClickRemove = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClickRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

const mapDispatchToProps = {
  editExpense,
  startRemoveExpense
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
