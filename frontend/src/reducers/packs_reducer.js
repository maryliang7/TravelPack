import { RECEIVE_PACK, RECEIVE_USER_PACKS, REMOVE_PACK } from '../actions/pack_actions';

const PacksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PACK:
      return Object.assign({}, state, {[action.pack.id]: action.pack})
    case RECEIVE_USER_PACKS:
      return Object.assign({}, action.packs)
    case REMOVE_PACK:
      let newState = Object.assign({}, state);
      delete newState[action.packId];
      return newState;
    default:
      return state;
  }
};

export default PacksReducer;