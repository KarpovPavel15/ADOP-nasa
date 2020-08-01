import React from "react";
import "./root-page.scss";
import { Calendar } from "react-calendar";

export const RootPage = ({history}) => {

    const clickDay = event => history.push(`/${event.getFullYear()}-${event.getMonth()+1}-${event.getDate()}`);
    const currentDay = new Date();
    const year = currentDay.getFullYear();
    const month = currentDay.getMonth();
    const day = currentDay.getDate();

    return (
        <div className="root-page">
            <Calendar
                showNeighboringMonth={false}
                onClickDay={event => clickDay(event)}
                prev2Label={null} next2Label={null} maxDate={new Date(year,month,day-1)}
                minDate={(new Date(2020, 0, 1))}
            />
        </div>
    );
};
