import { actionCreator, requestCreator, successCreator } from '../../../utils';

export const getSelectedMonthInfo = 'GET__SELECTED__MONTH__INFO';
export const getSelectedMonthInfoRequest = actionCreator(requestCreator(getSelectedMonthInfo));
export const getSelectedMonthInfoSuccess = actionCreator(successCreator(getSelectedMonthInfo));
