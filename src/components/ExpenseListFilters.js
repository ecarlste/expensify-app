import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters.action';

const ExpenseListFilters = props => {
  return (
    <div>
      <input value={props.text} type="text" onChange={e => props.setTextFilter(e.target.value)} />
    </div>
  );
};

const mapStateToProps = state => ({
  text: state.filters.text
});

const mapDispatchToProps = {
  setTextFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
