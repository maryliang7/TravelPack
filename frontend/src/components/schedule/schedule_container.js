import React from 'react';
import { connect } from 'react-redux';
import { getSchedule, createSchedule, updateSchedule, deleteSchedule } from '../../actions/schedule_actions';
import { getPack } from '../../actions/pack_actions';
import Schedule from './schedule';

const mapStateToProps = (state, ownProps) => ({
    pack: state.entities.packs[ownProps.match.params.id],
    schedules: state.entities.schedules,
    events: state.entities.events,
    packId: ownProps.match.params.packId, //packs/:packId/schedules
    scheduleId: ownProps.match.params.scheduleId
})

const mapDispatchToProps = (dispatch) => ({
    // getPack: (packId) => dispatch(getPack(packId)),
    // getSchedules: (id) => dispatch(getSchedules()),
    updateSchedule: (schedule) => dispatch(updateSchedule(schedule)),
    deleteSchedule: (id) => dispatch(deleteSchedule(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);