import './day.scss'
import React from 'react'

export const Day = ({returnToCalendar, currentDay, dayInfo}) => {
    return (
        <div className="day">
            <button onClick={event => returnToCalendar(event)}>Return to calendar</button>
            <p>Day: {currentDay}</p>
            <p>Copyright: {dayInfo.copyright}</p>
            <p>Explanation: {dayInfo.explanation}</p>
            {
                dayInfo.hdurl && <img className="day__picture" src={dayInfo.hdurl} alt="day"/>
            }
            {dayInfo.hdurl === undefined && dayInfo.url &&
            <div className="day__video video">
                <iframe title="video" className="video__iframe" allowFullScreen={true} src={dayInfo.url}>
                </iframe>
            </div>
            }
        </div>
    )
};
