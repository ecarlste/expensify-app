import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate
} from '../actions/filters.action';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          value={this.props.filters.text}
          type="text"
          onChange={e => this.props.setTextFilter(e.target.value)}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e =>
            e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
          }
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="end_date_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
