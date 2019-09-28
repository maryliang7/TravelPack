import { combineReducers } from 'redux';
import PacksReducer from './packs_reducer';
import usersReducer from './users_reducer';
import SchedulesReducer from './schedules_reducer';
import PaymentsReducer from './payments_reducer';
import PhotoReducer from './photos_reducer';

export default combineReducers({
  packs: PacksReducer,
  users: usersReducer,
  schedules: SchedulesReducer,
  payments: PaymentsReducer,
  photos: PhotoReducer
});