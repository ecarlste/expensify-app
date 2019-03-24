import uuid from 'uuid';
import actionTypes from './actionTypes';

export const addExpenseDefaultValues = {
  description: '',
  note: '',
  amount: 0,
  createdAt: 0
};

export const addExpense = ({
  description = addExpenseDefaultValues.description,
  note = addExpenseDefaultValues.note,
  amount = addExpenseDefaultValues.amount,
  createdAt = addExpenseDefaultValues.createdAt
} = {}) => ({
  type: actionTypes.addExpense,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: actionTypes.removeExpense,
  id
});

export const editExpense = (id, updates) => ({
  type: actionTypes.editExpense,
  id,
  updates
});
