import { shallow } from 'enzyme';
import React from 'react';
import { expenseRent } from '../fixtures/expenses.fixture';
import { EditExpensePage } from './EditExpensePage';

let editExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenseRent}
    />
  );
});

test('should render edit expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenseRent);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenseRent.id, expenseRent);
});

test('should handle onClickRemove', () => {
  wrapper.find('button').simulate('click');

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenseRent.id });
});
