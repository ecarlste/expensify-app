import actionTypes from './actionTypes';
import { addExpense, addExpenseDefaultValues, editExpense, removeExpense } from './expenses.action';

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
  const expenseData = {
    description: 'expense 1',
    note: 'fancy note',
    amount: 109500,
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: actionTypes.addExpense,
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: actionTypes.addExpense,
    expense: {
      ...addExpenseDefaultValues,
      id: expect.any(String)
    }
  });
});
