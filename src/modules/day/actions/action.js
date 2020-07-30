import { actionCreator, requestCreator, successCreator } from '../../../utils';

export const getSelectedDayInfo = 'GET__SELECTED__DAY__INFO';
export const getSelectedDayInfoRequest = actionCreator(requestCreator(getSelectedDayInfo));
export const getSelectedDayInfoSuccess = actionCreator(successCreator(getSelectedDayInfo));


