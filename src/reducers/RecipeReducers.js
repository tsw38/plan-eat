import {combineReducers} from 'redux';
import {RecipeConstants as RC} from 'constants/index';

const recipe = (state = {}, action) => {
    switch (action.type) {
        case RC.RECIPE_FETCHED:
            return {
                ...state,
                [action.payload.slug]: action.payload
            };
        case RC.RECIPE_ERROR:
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    recipe
});