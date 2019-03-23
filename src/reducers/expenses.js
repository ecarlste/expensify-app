import actionTypes from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addExpense:
      return [...state, ...action.expense];

    case actionTypes.removeExpense:
      return state.filter(({ id }) => id !== action.id);

    case actionTypes.editExpense:
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};