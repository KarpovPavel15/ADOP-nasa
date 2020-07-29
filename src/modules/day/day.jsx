import './day.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedMonthInfoRequest } from '../rootPage/actions';
import { currentDate, firstDayForLoadData } from '../../utils';

/**
 * @return {string}
 */

const getMonth = month => {
    switch (month) {
        case 'Jan' :
            return '01';
        case 'Feb' :
            return '02';
        case 'Mar' :
            return '03';
        case 'Apr' :
            return '04';
        case 'May' :
            return '05';
        case 'Jun' :
            return '06';
        case 'Jul' :
            return '07';
        case 'Aug' :
            return '08';
        case 'Sep' :
            return '09';
        case 'Oct' :
            return '10';
        case 'Nov' :
            return '11';
        case 'Dec' :
            return '12';
        default :
            return null
    }
};

export const Day = ({match}) => {
    const {monthInfo} = useSelector(store => store);
    // const listOfData = location;
    const dispatch = useDispatch();
    let currentDay = match.url.slice(5, 16);
    let month = currentDay.slice(0, 3);
    let year = currentDay.slice(7, 11);
    let day = currentDay.slice(4, 6);
    month = getMonth(month);
    currentDay = `${year}-${month}-${day}`;

    let infoCurrentDay = "";
    for (let data in monthInfo) {
        if (monthInfo[data].date === currentDay) {
            infoCurrentDay = monthInfo[data];
        }
    }

    useEffect(() => {
        monthInfo.length === 0 && dispatch(getSelectedMonthInfoRequest({currentDate},{firstDayForLoadData}))
    });

    return (
        <div>
            <p>Day: {currentDay}</p>
            <p>Day: {infoCurrentDay.copyright}</p>
            <p>Day: {infoCurrentDay.explanation}</p>
            <img className="day__picture" src={infoCurrentDay.hdurl}/>
        </div>
    )
};
