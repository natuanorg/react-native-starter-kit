import { handleActions } from 'redux-actions'
import { IncrementCounter, ResetCounter } from "../actions";

const INITIAL_STATE = {
    count: 0
};

export default handleActions({
    [IncrementCounter](state, action) {
        return {...state, count: state.count + 1}
    },
    [ResetCounter](state, action) {
        return {...state, count: 0}
    }
}, INITIAL_STATE);