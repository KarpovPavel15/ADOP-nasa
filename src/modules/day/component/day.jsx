import './day.scss'
import React from 'react'

export const Day = ({returnToCalendar,currentDay,dayInfo}) => {
    return (
        <div className="day">
            <button onClick={event => returnToCalendar(event)}>Return to calendar</button>
            <p>Day: {currentDay}</p>
            <p>Copyright: {dayInfo.copyright}</p>
            <p>Explanation: {dayInfo.explanation}</p>
            <img className="day__picture" src={dayInfo.hdurl}/>
        </div>
    )
};
