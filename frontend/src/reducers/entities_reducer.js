import { combineReducers } from 'redux';
import PacksReducer from './packs_reducer';
import PhotoReducer from './photos_reducer';

export default combineReducers({
  packs: PacksReducer,
  //schedules: SchedulesReducer,
  // payments: PaymentsReducer,
  photos: PhotoReducer
});