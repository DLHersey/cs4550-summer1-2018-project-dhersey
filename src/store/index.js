import React from 'react';
import { createStore, combineReducers } from 'redux'
import {sessionReducer} from '../reducers/sessionReducer';

export const store = createStore(
    combineReducers({
        sessionInfo: sessionReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);