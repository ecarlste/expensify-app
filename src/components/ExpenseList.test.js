import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from './ExpenseList';
import expenses from '../fixtures/expenses.fixture';

test('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message when no expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
