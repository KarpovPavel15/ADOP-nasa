import { applyMiddleware, createStore  } from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import { calendarSaga } from '../modules/day/saga';

const sagas = [
    calendarSaga
];

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagas.forEach(saga => sagaMiddleware.run(saga));
    return store;
};

export const store = configureStore();
