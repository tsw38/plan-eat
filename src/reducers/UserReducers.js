import {combineReducers} from 'redux';
import {AccountConstants as AC} from 'constants/index';

const account = (state = {}, action) => {
    switch (action.type) {
        case AC.SIGN_IN_ERROR:
        case AC.SESSION_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case AC.SIGN_IN_FETCHED:
        case AC.SESSION_FETCHED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default combineReducers({
    account
});