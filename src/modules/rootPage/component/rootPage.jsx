import React from "react";
import "./root-page.scss";
import { Calendar } from "react-calendar";

export const RootPage = ({history}) => {

    const clickDay = event => history.push(`/${event.getFullYear()}-${event.getMonth()+1}-${event.getDate()}`);

    return (
        <div className="app">
            <Calendar
                showNeighboringMonth={false}
                onClickDay={event => clickDay(event)}
                prev2Label={null} next2Label={null} maxDate={(new Date(2020, 11, 31))}
                minDate={(new Date(2020, 0, 1))}
            />
        </div>
    );
};
