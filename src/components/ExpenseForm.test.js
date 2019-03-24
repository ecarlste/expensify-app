import { shallow } from 'enzyme';
import React from 'react';
import { expenseRent } from '../fixtures/expenses.fixture';
import ExpenseForm from './ExpenseForm';

test('should render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenseRent} />);
  expect(wrapper).toMatchSnapshot();
});
