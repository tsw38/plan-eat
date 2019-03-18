import {RecipeConstants as RC} from 'constants/index';

export default (state = {}, action) => {
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
};