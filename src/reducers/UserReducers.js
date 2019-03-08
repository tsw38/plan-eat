import {combineReducers} from 'redux';
import {AccountConstants as AC} from 'constants/index';

const account = (state = {}, action) => {
    switch (action.type) {
        case AC.SIGN_IN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default combineReducers({
    account
});