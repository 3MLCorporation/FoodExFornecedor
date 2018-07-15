import {createStore} from 'redux';

import { USER_STATE_CHANGED } from './actions';

// Create a reducer with empty state (see below for explanation)
function reducer(state = {}, action) {

    // When USER_STATE_CHANGED is dispatched, update the store with new state
    if (action.type === USER_STATE_CHANGED) {
        return {
            user: action.user,
        };
    }

    return state;
}

export default createStore(reducer);