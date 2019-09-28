import {
    RECEIVE_EVENT,
    REMOVE_EVENT
} from '../actions/event_actions';

const EventsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_EVENT:
            return Object.assign({}, state, {[action.event.id]: action.event})
        case RECEIVE_SCHEDULE:
            return Object.assign({}, state, action.schedule.event)
        case REMOVE_EVENT:
            let newState = Object.assign({}, state);
            delete newState[action.eventId];
            return newState;
        default:
            return state
    }
}

export default EventsReducer;