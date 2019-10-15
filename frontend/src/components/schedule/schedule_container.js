import React from 'react';
import { connect } from 'react-redux';
import { createSchedule, getSchedules, updateSchedule, deleteSchedule } from '../../actions/schedule_actions';
import Schedule from './schedule';

const mapStateToProps = (state, ownProps) => {
    return{ 
      schedules: state.entities.schedules,
    //   events: state.entities.events
    }
}

const mapDispatchToProps = (dispatch) => ({
    getSchedules: (packId) => dispatch(getSchedules(packId)),
    updateSchedule: (schedule) => dispatch(updateSchedule(schedule)),
    deleteSchedule: (id) => dispatch(deleteSchedule(id)),
    createSchedule: data => dispatch(createSchedule(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);