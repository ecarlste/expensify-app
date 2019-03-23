import actionTypes from './actionTypes';

export const setTextFilter = (text = '') => ({
  type: actionTypes.setTextFilter,
  text
});

export const sortByDate = () => ({
  type: actionTypes.sortByDate
});

export const sortByAmount = () => ({
  type: actionTypes.sortByAmount
});

export const setStartDate = startDate => ({
  type: actionTypes.setStartDate,
  startDate
});

export const setEndtDate = endDate => ({
  type: actionTypes.setEndDate,
  endDate
});
