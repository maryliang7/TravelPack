import { connect } from 'react-redux';
import ScheduleForm from './schedule_form';
import { createSchedule } from '../../actions/schedule_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    schedules: state.entities.schedules,
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSchedule: data => dispatch(createSchedule(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);