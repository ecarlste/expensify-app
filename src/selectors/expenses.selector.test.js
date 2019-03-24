import selectExpenses from './expenses.selector';
import moment from 'moment';

const expenseCreditCard = {
  id: '1',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0)
    .add(4, 'days')
    .valueOf()
};
const expenseGum = {
  id: '2',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
};
const expenseRent = {
  id: '3',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0)
    .subtract(4, 'days')
    .valueOf()
};

const expenses = [expenseCreditCard, expenseGum, expenseRent];

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
