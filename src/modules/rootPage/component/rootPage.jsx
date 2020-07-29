import React from 'react';
import './root-page.scss';
import { Calendar } from 'react-calendar';
import { useHistory } from "react-router-dom";

export const RootPage = ({info}) => {
    let history = useHistory();

    const clickDay = event => {
        history.push(`/${event}`);
        history.push(info);
    };

    return (
        <div className="app">
            <Calendar onClickDay={event => clickDay(event)}/>
        </div>
    );
};
