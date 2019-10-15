import {
    RECEIVE_SCHEDULE,
    RECEIVE_SCHEDULES,
    REMOVE_SCHEDULE
} from '../actions/schedule_actions';

import {RECEIVE_PACK} from '../actions/pack_actions';


const SchedulesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_PACK: 
          let newSched = {}
          action.pack.schedules.forEach(schedule => newSched[schedule._id] = schedule)
          return newSched;
        case RECEIVE_SCHEDULE: 
            return Object.assign({}, state, {[action.schedule._id]: action.schedule})
        case RECEIVE_SCHEDULES: 
            return Object.assign({}, state, action.schedules)
        case REMOVE_SCHEDULE:
            let newState = Object.assign({}, state);
            delete newState[action.scheduleId];
            return newState
        default:
            return state;
    }
};

export default SchedulesReducer;