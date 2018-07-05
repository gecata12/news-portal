import { combineReducers } from 'redux';
import articleReducer from '../reducers/article';

export default combineReducers({
    articles: articleReducer
});