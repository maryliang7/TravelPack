import * as schedAPIUtil from '../util/schedule_api_util';

export const RECEIVE_SCHEDUELS = "RECEIVE_SCHEDULES";
export const RECEIVE_SCHEDULE = "RECEIVE_SCHEDULE";
export const REMOVE_SCHEDULE = "REMOVE_SCHEDULE";

export const receiveSchedule = (schedule) => ({
    type: RECEIVE_SCHEDULE,
    schedule
})

export const removeSchedule = (scheduleId) => ({
    type: REMOVE_SCHEDULE,
    scheduleId
})
////////////////////NOT USED/////////////////////
export const getSchedule = (data) => (dispatch) => (
    schedAPIUtil.getSchedule(data)
        .then(schedule => dispatch(receiveSchedule(schedule)))
        .catch(err => console.log(err))
)

export const getSchedules = (packId) => (dispatch) => (
    schedAPIUtil.getSchedule(data)
        .then(schedule => dispatch(receiveSchedules()))
        .catch(err => console.log(err))
)
//////////////////////////////////////////////////
export const createSchedule = (data) => (dispatch) => (
    schedAPIUtil.createSchedule(data)
        .then(schedule => dispatch(receiveSchedule(schedule)))
        .catch(err => console.log(err))
)

export const updateSchedule = (data) => (dispatch) => (
    schedAPIUtil.updateSchedule(data)
        .then(schedule => dispatch(receiveSchedule(schedule)))
        .catch(err => console.log(err))
)

export const deleteSchedule = (id) => (dispatch) => (
    schedAPIUtil.deleteSchedule(id)
        .then(scheduleId => dispatch(removeSchedule(scheduleId)))
        .catch(err => console.log(err))
)