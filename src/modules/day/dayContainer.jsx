import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedDayInfoRequest } from './actions';
import { Day } from './component';


export const DayContainer = ({match}) => {
    const {dayInfo} = useSelector(store => store);
    const dispatch = useDispatch();
    let history = useHistory();
    let currentDay = match.url.slice(1, 13);
    let month = currentDay.slice(5, 6);
    let year = currentDay.slice(0, 4);
    let day = currentDay.slice(7, 9);
    currentDay = `${year}-${month}-${day}`;


    useEffect(() => {
        dayInfo && dispatch(getSelectedDayInfoRequest({currentDay}))
    }, []);

    const returnToCalendar = () => {
        history.push('./')
    };

    return (
        <Day returnToCalendar={returnToCalendar} dayInfo={dayInfo} currentDay={currentDay}/>
    )
};
