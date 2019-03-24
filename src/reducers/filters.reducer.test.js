import filtersReducer, { initialState } from './filters.reducer';
import actionTypes from '../actions/actionTypes';

test('should setup default filter values', () => {
  const startingState = undefined;
  const action = { type: '@@INIT' };

  const state = filtersReducer(startingState, action);

  expect(state).toEqual(initialState);
});

test('should set text filter', () => {
  const startingState = initialState;
  const text = 'mother approved';
  const action = { type: actionTypes.setTextFilter, text };

  const state = filtersReducer(startingState, action);

  expect(state).toEqual({
    ...initialState,
    text
  });
});

test('should set sortBy to amount', () => {
  const startingState = initialState;
  const action = { type: actionTypes.sortByAmount };

  const state = filtersReducer(startingState, action);

  expect(state).toEqual({
    ...initialState,
    sortBy: 'amount'
  });
});

test('should set sortBy to date', () => {
  const startingState = { ...initialState, sortBy: 'amount' };
  const action = { type: actionTypes.sortByDate };

  const state = filtersReducer(startingState, action);

  expect(state).toEqual({
    ...initialState,
    sortBy: 'date'
  });
});

test('should set startDate filter', () => {
  const startingState = initialState;
  const startDate = initialState.startDate.add(1, 'year');
  const action = { type: actionTypes.setStartDate, startDate };

  const state = filtersReducer(startingState, action);

  expect(state).toEqual({
    ...initialState,
    startDate
  });
});

test('should set endDate filter', () => {
  const startingState = initialState;
  const endDate = initialState.endDate.add(1, 'year');
  const action = { type: actionTypes.setEndDate, endDate };

  const state = filtersReducer(startingState, action);

  expect(state).toEqual({
    ...initialState,
    endDate
  });
});
