import * as eventAPIUtil from '../util/event_api_util.js';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    event
})

const removeEvent = (eventId) => ({
    type: REMOVE_EVENT,
    eventId
})

export const getEvent = (data) => (dispatch) => (
    eventAPIUtil.getEvent(data)
        .then(event => dispatch(receiveEvent(event)))
        .catch(err => console.log(err)) 
)

export const createEvent = (data) => (dispatch) => (
    eventAPIUtil.createEvent(data)
        .then(event => dispatch(receiveEvent(event)))
        .catch(err => console.log(err)) 
)

export const updateEvent = (data) => (dispatch) => (
    eventAPIUtil.updateEvent(data)
        .then(event => dispatch(receiveEvent(event)))
        .catch(err => console.log(err)) 
)

export const deleteEvent = (data) => (dispatch) => (
    eventAPIUtil.getEvent(data)
        .then(eventId => dispatch(removeEvent(eventId)))
        .catch(err => console.log(err)) 
)