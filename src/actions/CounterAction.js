import { createActions } from "redux-actions";

export const {
    IncrementCounter,
    ResetCounter,
} = createActions('INCREMENT_COUNTER', 'RESET_COUNTER');

export const onIncrement = () => {
    return dispatch => {
        dispatch(IncrementCounter())
    }
};

export const onReset = () => {
    return dispatch => {
        dispatch(ResetCounter())
    }
};