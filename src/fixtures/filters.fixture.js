import moment from 'moment';

export const filtersSortByDate = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export const filtersWithTextAndDateRangeSortByAmount = {
  text: 'bill',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};
