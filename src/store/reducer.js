import { combineReducers } from 'redux';
import { reducerDay, reducerMonth } from '../modules/rootPage/reducer';

export default combineReducers({
    monthInfo: reducerMonth,
    dayInfo: reducerDay
});
