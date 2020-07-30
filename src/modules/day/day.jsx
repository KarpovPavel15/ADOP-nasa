import './day.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedDayInfoRequest } from '../rootPage/actions';
import { getMonth } from '../../utils';


export const Day = ({match}) => {
    const {dayInfo} = useSelector(store => store);
    const dispatch = useDispatch();
    let currentDay = match.url.slice(5, 16);
    let month = currentDay.slice(0, 3);
    let year = currentDay.slice(7, 11);
    let day = currentDay.slice(4, 6);
    month = getMonth(month);
    currentDay = `${year}-${month}-${day}`;


    useEffect(() => {
        dayInfo && dispatch(getSelectedDayInfoRequest({currentDay}))
    },[]);

    return (
        <div>
            <p>Day: {currentDay}</p>
            <p>Day: {dayInfo.copyright}</p>
            <p>Day: {dayInfo.explanation}</p>
            <img className="day__picture" src={dayInfo.hdurl}/>
        </div>
    )
};
