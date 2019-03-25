import moment from 'moment';
import expenses, { expenseCreditCard, expenseGum, expenseRent } from '../fixtures/expenses.fixture';
import { selectExpenses, selectExpensesTotal } from './expenses.selector';

const buildFilters = ({
  text = '',
  sortBy = 'date',
  startDate = undefined,
  endDate = undefined
} = {}) => ({
  text,
  sortBy,
  startDate,
  endDate
});

test('should filter by text value', () => {
  const filters = buildFilters({ text: 'e' });

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenseCreditCard, expenseRent]);
});

test('should filter by start date', () => {
  const filters = buildFilters({ startDate: moment(0) });

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenseCreditCard, expenseGum]);
});

test('should filter by end date', () => {
  const filters = buildFilters({ endDate: moment(0) });

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenseGum, expenseRent]);
});

test('should sort by date', () => {
  const filters = buildFilters({ sortBy: 'date' });

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual(expenses);
});

test('should sort by amount', () => {
  const filters = buildFilters({ sortBy: 'amount' });

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenseRent, expenseCreditCard, expenseGum]);
});

describe('getExpensesTotal', () => {
  test('should return 0 if no expenses', () => {
    const expenses = [];

    const total = selectExpensesTotal(expenses);

    expect(total).toBe(0);
  });

  test('should correctly add up a single expense', () => {
    const expense = expenseRent;
    const expenses = [expense];

    const total = selectExpensesTotal(expenses);

    expect(total).toBe(expense.amount);
  });

  test('should correctly add up multiple expenses', () => {
    const expenses = [expenseCreditCard, expenseRent];
    const expectedTotal = expenseCreditCard.amount + expenseRent.amount;

    const total = selectExpensesTotal(expenses);

    expect(total).toBe(expectedTotal);
  });
});
