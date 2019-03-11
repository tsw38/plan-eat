import {RecipeConstants as RC} from 'constants/index';

const ingredients = (state = {}, action) => {
    switch (action.type) {
        case RC.INGREDIENTS_FETCHED:
        case RC.ADDING_INGREDIENTS_FETCHED:
            const nextState = {
                ...state,
                ...action.payload
            };
            return nextState;
        default:
            return state
    }
}

export default ingredients;