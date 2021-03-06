import { firestore } from '../firebase/firebase';
import actionTypes from './actionTypes';

export const addExpenseDefaultValues = {
  description: '',
  note: '',
  amount: 0,
  createdAt: 0
};

export const addExpense = expense => {
  return {
    type: actionTypes.addExpense,
    expense
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const {
      description = addExpenseDefaultValues.description,
      note = addExpenseDefaultValues.note,
      amount = addExpenseDefaultValues.amount,
      createdAt = addExpenseDefaultValues.createdAt
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return firestore
      .collection(`users/${uid}/expenses`)
      .add(expense)
      .then(docRef => {
        dispatch(
          addExpense({
            id: docRef.id,
            ...expense
          })
        );
      });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: actionTypes.removeExpense,
  id
});

export const startRemoveExpense = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return firestore
      .collection(`users/${uid}/expenses`)
      .doc(id)
      .delete()
      .then(() => dispatch(removeExpense({ id })));
  };
};

export const editExpense = (id, updates) => ({
  type: actionTypes.editExpense,
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return firestore
      .collection(`users/${uid}/expenses`)
      .doc(id)
      .update(updates)
      .then(() => dispatch(editExpense(id, updates)));
  };
};

export const setExpenses = expenses => ({
  type: actionTypes.setExpenses,
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return firestore
      .collection(`users/${uid}/expenses`)
      .get()
      .then(snapshot => {
        dispatch(setExpenses(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
      });
  };
};
