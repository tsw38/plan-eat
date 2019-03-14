import {combineReducers} from 'redux';
import {
    StateConstants as SC,
    RecipeConstants as RC,
    AccountConstants as AC
} from 'constants/index';


const loading = (state = false, action) => {
    switch (action.type) {
        case SC.LOADING:
        case RC.RECIPE_PENDING:
        case AC.SESSION_PENDING:
            return true;
        case RC.RECIPE_FETCHED:
        case AC.SESSION_FETCHED:
            return false;
        default:
            return state;
    }
}

export default combineReducers({
    loading
});