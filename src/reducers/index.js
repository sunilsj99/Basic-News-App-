import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';

const RootReducer = combineReducers({
    news: NewsReducer
});

export default RootReducer;