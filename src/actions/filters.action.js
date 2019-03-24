import actionTypes from './actionTypes';

export const setTextFilterDefaultValues = {
  text: ''
};

export const setTextFilter = (text = setTextFilterDefaultValues.text) => ({
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

export const setEndDate = endDate => ({
  type: actionTypes.setEndDate,
  endDate
});
