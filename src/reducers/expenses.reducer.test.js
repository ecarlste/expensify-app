import expenses, { expenseRent } from '../fixtures/expenses.fixture';
import expensesReducer, { initialState } from './expenses.reducer';
import actionTypes from '../actions/actionTypes';

test('should set default state', () => {
  const startingState = undefined;
  const action = { type: '@@INIT' };

  const state = expensesReducer(startingState, action);

  expect(state).toEqual(initialState);
});

test('should remove expense by id', () => {
  const startingState = expenses;
  const id = expenses[0].id;
  const action = { type: actionTypes.removeExpense, id };

  const state = expensesReducer(startingState, action);
  const expense = state.find(expense => expense.id === id);

  expect(state.length).toEqual(expenses.length - 1);
  expect(expense).toBeUndefined();
});

test('should not remove expense if id not found', () => {
  const startingState = expenses;
  const id = 'invalid-id-string';
  const action = { type: actionTypes.removeExpense, id };

  const state = expensesReducer(startingState, action);

  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const startingState = [];
  const expense = expenseRent;
  const action = { type: actionTypes.addExpense, expense };

  const state = expensesReducer(startingState, action);

  expect(state).toEqual([...startingState, expense]);
});

test('should edit an expense', () => {
  const expense = expenseRent;
  const startingState = [expense];
  const updates = { amount: expense.amount + 10000 };
  const action = { type: actionTypes.editExpense, id: expense.id, updates };

  const state = expensesReducer(startingState, action);

  expect(state).toEqual([
    {
      ...expense,
      ...updates
    }
  ]);
});

test('should not edit expense if expense id not found', () => {
  const expense = expenseRent;
  const startingState = [expense];
  const updates = { amount: expense.amount + 10000 };
  const action = { type: actionTypes.editExpense, id: 'invalid-id-string', updates };

  const state = expensesReducer(startingState, action);

  expect(state).toEqual(startingState);
});
