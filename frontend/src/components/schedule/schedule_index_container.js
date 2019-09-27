import React from 'react';
import { connect } from 'react-redux';
import { getSchedule, createSchedule, updateSchedule, deleteSchedule } from '../../actions/schedule_actions';
import { getPack } from '../../actions/pack_actions';
import Schedule from './schedule';

const mapStateToProps = (state, ownProps) => ({
    schedules: state.entities.schedules,
    //packs/:packId/schedules
    packId: ownProps.match.params.packId
})

const mapDispatchToProps = (dispatch) => ({
    getPack: (packId) => dispatch(getPack(packId)),
    // getSchedules: (id) => dispatch(getSchedules()),
    updateSchedule: (schedule) => dispatch(updateSchedule(schedule)),
    deleteSchedule: (id) => dispatch(deleteSchedule(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);