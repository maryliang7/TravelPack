import { combineReducers } from 'redux';
import PacksReducer from './packs_reducer';
import UsersReducer from './users_reducer';
import SchedulesReducer from './schedules_reducer';
import PaymentsReducer from './payments_reducer';
import PhotoReducer from './photos_reducer';
import EventsReducer from './events_reducer';

export default combineReducers({
  packs: PacksReducer,
  users: UsersReducer,
  schedules: SchedulesReducer,
  events: EventsReducer,
  payments: PaymentsReducer,
  photos: PhotoReducer,
});