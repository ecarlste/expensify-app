import uuid from 'uuid';
import actionTypes from './actionTypes';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
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
  udpates
});
