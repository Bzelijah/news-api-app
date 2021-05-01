import { combineReducers } from 'redux';
import interestingNewsReducer from './InterestingNewsReducer';
import NewsReducer from './NewsReducer';

const RootReducer = combineReducers({
    news: NewsReducer,
    interestingNews: interestingNewsReducer,
});

export default RootReducer;
