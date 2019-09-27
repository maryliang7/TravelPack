import React from 'react';
import { connect } from 'react-redux';
import { getSchedule, createSchedule, updateSchedule, deleteSchedule } from '../../actions/schedule_actions';
import Schedule from './schedule';

const mapStateToProps = (state, ownProps) => ({
    schedule: state.entities.packs.schedules[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    getSchedule: (id) => dispatch(getSchedule(id)),
    updateSchedule: (schedule) => dispatch(updateSchedule(schedule)),
    deleteSchedule: (id) => dispatch(deleteSchedule(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);