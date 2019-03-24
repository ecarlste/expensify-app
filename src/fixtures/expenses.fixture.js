import moment from 'moment';

export const expenseCreditCard = {
  id: '1',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0)
    .add(4, 'days')
    .valueOf()
};

export const expenseGum = {
  id: '2',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
};

export const expenseRent = {
  id: '3',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0)
    .subtract(4, 'days')
    .valueOf()
};

export default [expenseCreditCard, expenseGum, expenseRent];
