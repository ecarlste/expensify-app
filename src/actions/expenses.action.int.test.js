import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { firestore } from '../firebase/firebase';
import expenses, { expenseRent } from '../fixtures/expenses.fixture';
import actionTypes from './actionTypes';
import {
  addExpenseDefaultValues,
  startAddExpense,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from './expenses.action';

const createMockStore = configureMockStore([thunk]);

beforeEach(() => {
  const uid = 'test-user';
  const batch = firestore.batch();

  expenses.forEach(expense => {
    const docRef = firestore.collection(`users/${uid}/expenses`).doc(expense.id);
    batch.set(docRef, expense);
  });

  return batch.commit();
});

afterEach(() => {
  const uid = 'test-user';

  return firestore
    .collection(`users/${uid}/expenses`)
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
  const uid = 'test-user';
  const store = createMockStore({ auth: { uid } });
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
        .collection(`users/${uid}/expenses`)
        .doc(actions[0].expense.id)
        .get();
    })
    .then(doc => {
      expect(doc.data()).toEqual(expenseData);
    });
});

test('should add expense with defaults to database and store', () => {
  const uid = 'test-user';
  const store = createMockStore({ auth: { uid } });

  return store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: actionTypes.addExpense,
        expense: { id: expect.any(String), ...addExpenseDefaultValues }
      });

      return firestore
        .collection(`users/${uid}/expenses`)
        .doc(actions[0].expense.id)
        .get();
    })
    .then(doc => {
      expect(doc.data()).toEqual(addExpenseDefaultValues);
    });
});

test('should read expenses from database and set store correctly', () => {
  const uid = 'test-user';
  const store = createMockStore({ auth: { uid } });

  return store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: actionTypes.setExpenses,
      expenses
    });
  });
});

test('should remove expenses from firebase', () => {
  const uid = 'test-user';
  const store = createMockStore({ expenses, auth: { uid } });
  const id = expenses[0].id;

  return store
    .dispatch(startRemoveExpense(id))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: actionTypes.removeExpense,
        id
      });

      return firestore
        .collection(`users/${uid}/expenses`)
        .doc(id)
        .get();
    })
    .then(doc => {
      expect(doc.exists).toBe(false);
    });
});

test('should edit expenses from firebase', () => {
  const uid = 'test-user';
  const store = createMockStore({ expenses: [expenseRent], auth: { uid } });
  const id = expenseRent.id;
  const amount = expenseRent.amount + 10000;
  const updates = { amount };

  return store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: actionTypes.editExpense,
        id,
        updates
      });

      return firestore
        .collection(`users/${uid}/expenses`)
        .doc(id)
        .get();
    })
    .then(doc => {
      expect(doc.data().amount).toEqual(amount);
    });
});
