import { combineReducers } from 'redux';
import { reducerMonth } from '../modules/rootPage/reducer';

export default combineReducers({
    monthInfo: reducerMonth
});
