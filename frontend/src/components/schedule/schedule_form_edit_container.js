import React from 'react';
import { connect } from 'react-redux';
import ScheduleForm from './schedule_form';
import { updateSchedule } from '../../actions/schedule_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSchedule: data => dispatch(updateSchedule(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);