import { all, call, put, takeLatest } from "redux-saga/effects";
import { getSelectedDayInfoSuccess } from "../actions";
import * as axios from "axios";

const fetchDataOnDay = day => axios.get(`https://api.nasa.gov/planetary/apod?api_key=f349WgzxLaFtNpgVjCHqkge0tiid36Wm4C6N5N7c&date=${day}`);

function* getDayContent({currentDay}) {
    const result = yield call(fetchDataOnDay, currentDay);
    yield put(getSelectedDayInfoSuccess({
        dayInfo: {...result.data}
    }));
}

export function* calendarSaga() {
    yield all([
        takeLatest('GET__SELECTED__DAY__INFO__REQUEST', getDayContent),
    ]);
}
