import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses.action';

const ExpenseListItem = ({ id, description, amount, createdAt, removeExpense }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
    <button onClick={() => removeExpense({ id })}>Remove</button>
  </div>
);

const mapDispatchToProps = {
  removeExpense
};

export default connect(
  null,
  mapDispatchToProps
)(ExpenseListItem);
