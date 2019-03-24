import React from 'react';
import { shallow } from 'enzyme';
import { expenseRent } from '../fixtures/expenses.fixture';
import { ExpenseListItem } from './ExpenseListItem';

test('should render ExpenseListItem', () => {
  const wrapper = shallow(<ExpenseListItem {...expenseRent} />);
  expect(wrapper).toMatchSnapshot();
});
