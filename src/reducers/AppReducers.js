import {combineReducers} from 'redux';
import {StateConstants as SC} from 'constants/index';


const loading = (state = false, action) => {
    switch (action.type) {
        case SC.LOADING:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    loading
});