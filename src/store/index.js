import ReduxThunk from "redux-thunk";
import { persistStore } from 'redux-persist'
import {applyMiddleware, createStore} from "redux";
import reducers from '../reducers'
import logger from 'redux-logger'

export const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));
export const persistor = persistStore(store);