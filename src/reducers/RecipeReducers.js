import {RecipeConstants as RC} from 'constants/index';

export default (state = {}, {type, payload}) => {
    switch (type) {
        case RC.RECIPE_FETCHED:
            return {
                ...state,
                error: null,
                [payload.slug]: payload
            };
        case RC.RECIPE_ERROR:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
};