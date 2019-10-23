import * as eventAPIUtil from '../util/event_api_util.js';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_SCHEDULE = "RECEIVE_SCHEDULE"

const receiveEvent = (event) => {
  return({
    type: RECEIVE_EVENT,
    // type: RECEIVE_SCHEDULE,
    event: event.data
})}

const receiveEvents = (events) => {
  return({
    type: RECEIVE_EVENTS,
    // type: RECEIVE_SCHEDULE,
    events: events.data
})}

const removeEvent = (event) => {
return({
  type: REMOVE_EVENT,
  event: event
})}

export const getEvent = (data) => (dispatch) => (
  eventAPIUtil.getEvent(data)
    .then(event => dispatch(receiveEvent(event)))
    .catch(err => console.log(err)) 
)

export const getEvents = (data) => (dispatch) => (
  eventAPIUtil.getEvents(data)
    .then(event => dispatch(receiveEvents(event)))
    .catch(err => console.log(err)) 
)

export const createEvent = (data) => (dispatch) => {
return(
  eventAPIUtil.createEvent(data)
    .then(event => dispatch(receiveEvent(event)))
    .catch(err => console.log(err)) 
)}

export const updateEvent = (data) => (dispatch) => {
return(
  eventAPIUtil.updateEvent(data)
    .then(event => {
      dispatch(removeEvent({eventId: event.data.oldEventId, scheduleId: event.data.scheduleId }))
      dispatch(receiveEvent(event))
    })
    .catch(err => console.log(err)) 
)}

export const deleteEvent = (data) => (dispatch) => {
  return(
  eventAPIUtil.deleteEvent(data)
    .then(event => dispatch(removeEvent(event.data)))
    .catch(err => console.log(err)) 
)}