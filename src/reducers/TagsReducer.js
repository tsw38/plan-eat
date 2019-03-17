import {RecipeConstants as RC} from 'constants/index';

const tags = (state = {}, action) => {
    switch (action.type) {
        case RC.TAGS_FETCHED:
            const nextState = {
                ...state,
                ...action.payload
            };
            return nextState;
        default:
            return state
    }
}

export default tags;