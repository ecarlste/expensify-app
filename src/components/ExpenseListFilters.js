import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters.action';

const ExpenseListFilters = props => {
  return (
    <div>
      <input value={props.text} type="text" onChange={e => props.setTextFilter(e.target.value)} />
      <select
        value={props.sortBy}
        onChange={e => (e.target.value === 'date' ? props.sortByDate() : props.sortByAmount())}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({
  sortBy: state.filters.sortBy,
  text: state.filters.text
});

const mapDispatchToProps = {
  setTextFilter,
  sortByAmount,
  sortByDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
