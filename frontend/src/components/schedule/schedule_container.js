import React from 'react';
import { connect } from 'react-redux';
import { getSchedules, updateSchedule, deleteSchedule } from '../../actions/schedule_actions';
import Schedule from './schedule';

const mapStateToProps = (state, ownProps) => {
    return{ 
    //   schedule: state.entities.schedules[ownProps.match.params.id],
    //   events: state.entities.events
    }
}

const mapDispatchToProps = (dispatch) => ({
    getSchedules: (packId) => dispatch(getSchedules(packId)),
    updateSchedule: (schedule) => dispatch(updateSchedule(schedule)),
    deleteSchedule: (id) => dispatch(deleteSchedule(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);