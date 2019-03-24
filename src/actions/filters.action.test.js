import moment from 'moment';
import actionTypes from './actionTypes';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  setTextFilterDefaultValues,
  sortByAmount,
  sortByDate
} from './filters.action';

test('should generate set start date action object', () => {
  const startDate = moment(0);

  const action = setStartDate(startDate);

  expect(action).toEqual({
    type: actionTypes.setStartDate,
    startDate
  });
});

test('should generate set end date action object', () => {
  const endDate = moment(0);

  const action = setEndDate(endDate);

  expect(action).toEqual({
    type: actionTypes.setEndDate,
    endDate
  });
});

test('should generate set text filter action object with provided value', () => {
  const text = 'funky';

  const action = setTextFilter(text);

  expect(action).toEqual({
    type: actionTypes.setTextFilter,
    text
  });
});

test('should generate set text filter action object with default value', () => {
  const text = setTextFilterDefaultValues.text;

  const action = setTextFilter();

  expect(action).toEqual({
    type: actionTypes.setTextFilter,
    text
  });
});

test('should generate sort by amount action object', () => {
  expect(sortByAmount()).toEqual({ type: actionTypes.sortByAmount });
});

test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: actionTypes.sortByDate });
});
