import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

// Enable Redux Dev Tools for Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);
export const action = type => store.dispatch({ type });

export default store;
