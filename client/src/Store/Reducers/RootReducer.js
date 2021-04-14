import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';

const RootReducer = combineReducers({
  news: NewsReducer,
});

export default RootReducer;
