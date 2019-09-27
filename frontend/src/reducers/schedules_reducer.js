import {
    RECEIVE_SCHEDULE,
    REMOVE_SCHEDULE
} from '../actions/schedule_actions';

const SchedulesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_PACK: 
            return Object.assign({}, state, action.pack.schedules)
        case RECEIVE_SCHEDULE: 
            return Object.assign({}, state, {[action.schedule.id]: action.schedule})
        case REMOVE_SCHEDULE:
            let newState = Object.assign({}, state);
            delete newState[action.scheduleId];
            return newState
        default:
            return state;
    }
};

export default SchedulesReducer;