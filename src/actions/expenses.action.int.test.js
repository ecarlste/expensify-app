import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { firestore } from '../firebase/firebase';
import expenses from '../fixtures/expenses.fixture';
import actionTypes from './actionTypes';
import { addExpenseDefaultValues, startAddExpense } from './expenses.action';

const createMockStore = configureMockStore([thunk]);

beforeEach(() => {
  const batch = firestore.batch();

  expenses.forEach(expense => {
    const docRef = firestore.collection('expenses').doc(expense.id);
    batch.set(docRef, expense);
  });

  return batch.commit();
});

afterEach(() => {
  return firestore
    .collection('expenses')
    .get()
    .then(snapshot => {
      const batch = firestore.batch();

      snapshot.forEach(doc => {
        batch.delete(doc.ref);
      });

      return batch.commit();
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