import {
  RECEIVE_EVENT,
  RECEIVE_EVENTS,
  REMOVE_EVENT,
  RECEIVE_SCHEDULE
} from '../actions/event_actions';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, state, {[action.event._id]: action.event})
    case RECEIVE_EVENTS:
      return Object.assign({}, state, action.events)
    case RECEIVE_SCHEDULE:
      return Object.assign({}, state, action.schedule.event)
    case REMOVE_EVENT:
      let newState = Object.assign({}, state);
      delete newState[action.event.eventId];
      return newState;
    default:
      return state;
  }
}

export default EventsReducer;