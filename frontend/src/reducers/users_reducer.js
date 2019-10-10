import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USERS:
      let newState = {}
      action.users.forEach(user => newState[user._id] = user)
      return newState;
    default:
      return state;
  }
}

export default usersReducer;