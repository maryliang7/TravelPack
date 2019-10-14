import * as schedAPIUtil from '../util/schedule_api_util';

export const RECEIVE_SCHEDULES = "RECEIVE_SCHEDULES";
export const RECEIVE_SCHEDULE = "RECEIVE_SCHEDULE";
export const REMOVE_SCHEDULE = "REMOVE_SCHEDULE";

export const receiveSchedule = (schedule) => ({
    type: RECEIVE_SCHEDULE,
    schedule: schedule.data
})

export const receiveSchedules = (schedules) => ({
    type: RECEIVE_SCHEDULES,
    schedules: schedules.data
})

export const removeSchedule = (scheduleId) => ({
    type: REMOVE_SCHEDULE,
    scheduleId: scheduleId.data
})
export const getSchedule = (data) => (dispatch) => (
    schedAPIUtil.getSchedule(data)
        .then(schedule => dispatch(receiveSchedule(schedule)))
        .catch(err => console.log(err))
)

export const getSchedules = (packId) => (dispatch) => {
    return(
    schedAPIUtil.getSchedules(packId)
        .then(schedules => dispatch(receiveSchedules(schedules)))
        .catch(err => console.log(err))
)}

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

export const deleteSchedule = (data) => (dispatch) => {
  return(
    schedAPIUtil.deleteSchedule(data)
        .then(scheduleId => dispatch(removeSchedule(scheduleId)))
        .catch(err => console.log(err))
)}