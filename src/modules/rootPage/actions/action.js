import { actionCreator, requestCreator, successCreator } from '../../../utils';

export const getSelectedMonthInfo = 'GET__SELECTED__MONTH__INFO';
export const getSelectedMonthInfoRequest = actionCreator(requestCreator(getSelectedMonthInfo));
export const getSelectedMonthInfoSuccess = actionCreator(successCreator(getSelectedMonthInfo));

export const getSelectedDayInfo = 'GET__SELECTED__DAY__INFO';
export const getSelectedDayInfoRequest = actionCreator(requestCreator(getSelectedDayInfo));
export const getSelectedDayInfoSuccess = actionCreator(successCreator(getSelectedDayInfo));

export const updateCurrentMonthInfo = 'UPDATE__CURRENT__MONTH__INFO';
export const updateCurrentMonthInfoRequest = actionCreator(requestCreator(updateCurrentMonthInfo));
export const updateCurrentMonthInfoSuccess = actionCreator(successCreator(updateCurrentMonthInfo));


