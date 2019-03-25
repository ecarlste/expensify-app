import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './ExpensesSummary';

test('should correctly render ExpensesSummary with a single expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesTotal={9434} expenseCount={1} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesTotal={9434} expenseCount={2} />);
  expect(wrapper).toMatchSnapshot();
});
