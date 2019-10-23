import { connect } from 'react-redux';
import { createSchedule, getSchedules, updateSchedule, deleteSchedule } from '../../actions/schedule_actions';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../../actions/event_actions';
import Schedule from './schedule';

const mapStateToProps = (state, ownProps) => {
  return{ 
    schedules: state.entities.schedules
    // events: state.entities.schedules[ownProps.props.match.params.scheduleId].events
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSchedules: (packId) => dispatch(getSchedules(packId)),
  getEvents: (data) => dispatch(getEvents(data)),
  createSchedule: (schedule) => dispatch(createSchedule(schedule)),
  updateSchedule: (schedule) => dispatch(updateSchedule(schedule)),
  deleteSchedule: (id) => dispatch(deleteSchedule(id)),
  createEvent: (event) => dispatch(createEvent(event)),
  updateEvent: (data) => dispatch(updateEvent(data)),
  deleteEvent: (id) => dispatch(deleteEvent(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);