import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { RootPageContainer } from '../modules';
import { DayContainer } from '../modules/day';

export const RootRoute = () => (
    <main>
        <Switch>
            <Route exact path='/' component={RootPageContainer}/>
            <Route path='/:day' component={DayContainer}/>
        </Switch>
    </main>
);
