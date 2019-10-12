import { combineReducers } from 'redux';
import profileReducer from './profile';
import newsReducer from './news';

export const rootReducer = combineReducers({
  profile: profileReducer,
  news: newsReducer
});
