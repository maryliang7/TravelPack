import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import PacksReducer from './packs_reducer';

const RootReducer = combineReducers({
  packs: PacksReducer,
  errors,
  session
});

export default RootReducer;