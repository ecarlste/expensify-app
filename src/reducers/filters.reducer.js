import moment from 'moment';
import actionTypes from '../actions/actionTypes';

export const initialState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setTextFilter:
      return {
        ...state,
        text: action.text
      };

    case actionTypes.sortByAmount:
      return {
        ...state,
        sortBy: 'amount'
      };

    case actionTypes.sortByDate:
      return {
        ...state,
        sortBy: 'date'
      };

    case actionTypes.setStartDate:
      return {
        ...state,
        startDate: action.startDate
      };

    case actionTypes.setEndDate:
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};
