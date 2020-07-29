import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Day, RootPageContainer } from '../modules';

export const RootRoute = () => (
    <main>
        <Switch>
            <Route exact path='/' component={RootPageContainer}/>
            <Route path='/:day' component={Day}/>
        </Switch>
    </main>
);
