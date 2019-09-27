import { combineReducers } from 'redux';
import PacksReducer from './packs_reducer';


export default combineReducers({
  packs: PacksReducer,
  //schedules: SchedulesReducer,
  // payments: PaymentsReducer
});