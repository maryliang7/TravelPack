import { RECEIVE_PACK, RECEIVE_USER_PACKS, REMOVE_PACK, REMOVE_PACKS } from '../actions/pack_actions';

const PacksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PACK:
      return Object.assign({}, state, {[action.pack._id]: action.pack})
    case RECEIVE_USER_PACKS:
      let newPacks = {};
      action.packs.map(pack => {
        newPacks[pack._id] = pack;
      })
      return Object.assign({}, newPacks);
    case REMOVE_PACK:
      let newState = Object.assign({}, state);
      delete newState[action.packId];
      return newState;
    case REMOVE_PACKS:
      return {};
    default:
      return state;
  }
};

export default PacksReducer;