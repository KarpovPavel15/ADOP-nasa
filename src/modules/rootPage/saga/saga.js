import { call, put, takeLatest } from 'redux-saga/effects';
import { getSelectedMonthInfoSuccess } from '../actions';
import * as axios from 'axios';

const fetchData = () => axios.get("https://api.nasa.gov/planetary/apod?api_key=f349WgzxLaFtNpgVjCHqkge0tiid36Wm4C6N5N7c&start_date=2020-06-25&end_date=2020-07-28");

function* setMonthContent() {
    const result = yield call(fetchData);
    yield put(getSelectedMonthInfoSuccess({
        monthInfo: [...result.data]
    }));
}

export function* sagaMonth() {
    yield takeLatest('GET__SELECTED__MONTH__INFO__REQUEST', setMonthContent)
}
