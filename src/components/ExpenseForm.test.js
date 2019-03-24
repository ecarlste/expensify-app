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

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('form').simulate('submit', { preventDefault: () => {} });

  expect(wrapper.state('error')).toEqual(ExpenseForm.defaultErrorMessage);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'new description';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('#description').simulate('change', { target: { value } });

  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'new note';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('#note').simulate('change', { target: { value } });

  expect(wrapper.state('note')).toBe(value);
});

test('should set amount on change when valid input', () => {
  const value = '12.51';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('#amount').simulate('change', { target: { value } });

  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on change when invalid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  const initialAmount = wrapper.state('amount');
  const value = 'invalid currency string';

  wrapper.find('#amount').simulate('change', { target: { value } });

  expect(wrapper.state('amount')).toBe(initialAmount);
});
