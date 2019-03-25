import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from './actionTypes';
import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense,
  addExpenseDefaultValues
} from './expenses.action';
import { expenseGum } from '../fixtures/expenses.fixture';
import { firestore } from '../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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

test('should add expense to database and store', () => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is bestest!',
    createdAt: 1000
  };

  return store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: actionTypes.addExpense,
        expense: { id: expect.any(String), ...expenseData }
      });

      return firestore
        .collection('expenses')
        .doc(actions[0].expense.id)
        .get();
    })
    .then(doc => {
      expect(doc.data()).toEqual(expenseData);
    });
});

test('should add expense with defaults to database and store', () => {
  const store = createMockStore({});

  return store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: actionTypes.addExpense,
        expense: { id: expect.any(String), ...addExpenseDefaultValues }
      });

      return firestore
        .collection('expenses')
        .doc(actions[0].expense.id)
        .get();
    })
    .then(doc => {
      expect(doc.data()).toEqual(addExpenseDefaultValues);
    });
});

// test('Should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: actionTypes.addExpense,
//     expense: {
//       ...addExpenseDefaultValues,
//       id: expect.any(String)
//     }
//   });
// });
