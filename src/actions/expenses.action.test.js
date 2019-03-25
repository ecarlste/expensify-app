import { expenseGum } from '../fixtures/expenses.fixture';
import actionTypes from './actionTypes';
import { addExpense, editExpense, removeExpense } from './expenses.action';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: actionTypes.removeExpense,
    id: '123abc'
  });
});

test('Should setup edit expense action object', () => {
  const updates = { note: 'New note value' };
  const action = editExpense('edit44', updates);

  expect(action).toEqual({
    type: actionTypes.editExpense,
    id: 'edit44',
    updates
  });
});

test('Should setup add expense action object with provided values', () => {
  const expense = expenseGum;

  const action = addExpense(expense);

  expect(action).toEqual({
    type: actionTypes.addExpense,
    expense: expense
  });
});
