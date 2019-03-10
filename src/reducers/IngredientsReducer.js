import {RecipeConstants as RC} from 'constants/index';

const ingredients = (state = {}, action) => {
    switch (action.type) {
        case RC.INGREDIENTS_FETCHED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default ingredients;