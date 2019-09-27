import * as schedAPIUtil from '../util/schedule_api_util';

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

export const getSchedule = (data) => (dispatch) => (
    schedAPIUtil.getSchedule(data)
        .then(schedule => dispatch(receiveSchedule(schedule)))
        .catch(err => console.log(err))
)

export const createSchedule = (data) => (dispatch) => (
    schedAPIUtil.createSchedule(data)
        .then(schedule => dispatch(receiveSchedule(schedule)))
        .catch(err => console.log(err))
)

export const updateSchedule = (data) => (dispatch) => (
    schedAPIUtil.putSchedule(data)
        .then(schedule => dispatch(receiveSchedule(schedule)))
        .catch(err => console.log(err))
)

export const deleteSchedule = (id) => (dispatch) => (
    schedAPIUtil.deleteSchedule(id)
        .then(scheduleId => dispatch(removeSchedule(scheduleId)))
        .catch(err => console.log(err))
)