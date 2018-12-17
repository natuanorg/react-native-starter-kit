import { combineReducers } from 'redux';
import CounterReducer from "./CounterReducer";

const appReducer = combineReducers({
    count: CounterReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;