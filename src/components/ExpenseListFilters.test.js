import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from './ExpenseListFilters';
import {
  filtersSortByDate,
  filtersWithTextAndDateRangeSortByAmount
} from '../fixtures/filters.fixture';

let setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filtersSortByDate}
      setTextFilter={setTextFilter}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correct when filters are set', () => {
  wrapper.setProps({
    filters: filtersWithTextAndDateRangeSortByAmount
  });

  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'filter text';

  wrapper.find('input').simulate('change', {
    target: {
      value
    }
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  const event = {
    target: {
      value
    }
  };

  wrapper.find('select').simulate('change', event);

  expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sort by amount', () => {
  const value = 'amount';
  const event = {
    target: {
      value
    }
  };

  wrapper.find('select').simulate('change', event);

  expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(1, 'years');
  const endDate = moment(0).add(2, 'years');

  wrapper
    .findWhere(n => {
      return n.name() && n.name().includes('DateRangePicker');
    })
    .prop('onDatesChange')({ startDate, endDate });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const newFocusedState = 'startDate';

  wrapper
    .findWhere(n => {
      return n.name() && n.name().includes('DateRangePicker');
    })
    .prop('onFocusChange')(newFocusedState);

  expect(wrapper.state('calendarFocused')).toBe(newFocusedState);
});
