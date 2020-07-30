import { combineReducers } from 'redux';
import { reducerDay } from '../modules/day/reducer';

export default combineReducers({
    dayInfo: reducerDay
});
