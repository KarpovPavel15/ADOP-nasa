import React from 'react';
import './root-page.scss';
import { Calendar } from 'react-calendar';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateCurrentMonthInfoRequest } from '../actions';

export const RootPage = ({info}) => {
    let history = useHistory();
    const dispatch = useDispatch();

    const clickDay = event => {
        history.push(`/${event}`);
        history.push(info);
    };
    const changeDate = event => {
        let year = event.getFullYear();
        let month = event.getMonth()+1;
        let day = event.getDate();
        const firstDayForLoad = `${year}-${month}-${day}`;
        const lastDayForLoad = `${year}-${month+1}-1`;
        dispatch(updateCurrentMonthInfoRequest({load: {firstDayForLoad, lastDayForLoad}}))
    };

    return (
        <div className="app">
            <Calendar
                showNeighboringMonth={false}
                onClickMonth={(e) => changeDate(e)} onClickDay={event => clickDay(event)}
                prev2Label={null} next2Label={null} maxDate={(new Date(2020, 11, 31))}
                minDate={(new Date(2020, 0, 1))}
            />
        </div>
    );
};
