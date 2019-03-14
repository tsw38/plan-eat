import {combineReducers} from 'redux';
import {
    StateConstants as SC,
    AccountConstants as AC
} from 'constants/index';


const loading = (state = false, action) => {
    switch (action.type) {
        case SC.LOADING:
        case AC.SESSION_PENDING:
            return true;
        case AC.SESSION_FETCHED:
            return false;
        default:
            return state;
    }
}

export default combineReducers({
    loading
});