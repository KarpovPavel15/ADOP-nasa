import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './store';
import { RootRoute } from './rootRoute';

export default function App () {
    const customHistory = createBrowserHistory();
    return (
        <Provider store={store}>
            <Router history={customHistory}>
                <RootRoute/>
            </Router>
        </Provider>
    )
};
