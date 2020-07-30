import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getSelectedDayInfoSuccess, getSelectedMonthInfoSuccess, updateCurrentMonthInfoSuccess } from '../actions';
import * as axios from 'axios';

const fetchData = (currentDate, firstDayForLoadData) => axios.get(`https://api.nasa.gov/planetary/apod?api_key=f349WgzxLaFtNpgVjCHqkge0tiid36Wm4C6N5N7c&start_date=${firstDayForLoadData}&end_date=${currentDate}`);
const fetchDataOnDay = day => axios.get(`https://api.nasa.gov/planetary/apod?api_key=f349WgzxLaFtNpgVjCHqkge0tiid36Wm4C6N5N7c&date=${day}`);

function* setMonthContent({currentDate, firstDayForLoadData}) {
    const result = yield call(fetchData, currentDate, firstDayForLoadData);
    yield put(getSelectedMonthInfoSuccess({
        monthInfo: [...result.data]
    }));
}

function* getDayContent({currentDay}) {
    const result = yield call(fetchDataOnDay, currentDay);
    yield put(getSelectedDayInfoSuccess({
        dayInfo: {...result.data}
    }));
}

function* updateMonthContent({load: {firstDayForLoad, lastDayForLoad}}) {
    const result = yield call(fetchData, lastDayForLoad, firstDayForLoad);
    yield put(updateCurrentMonthInfoSuccess({
        monthInfo: [...result.data]
    }));
}

export function* sagaMonth() {
    yield all([
        takeLatest('GET__SELECTED__MONTH__INFO__REQUEST', setMonthContent),
        takeLatest('GET__SELECTED__DAY__INFO__REQUEST', getDayContent),
        takeLatest('UPDATE__CURRENT__MONTH__INFO__REQUEST', updateMonthContent)
    ]);
}
