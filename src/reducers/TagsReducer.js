
import {combineReducers} from 'redux';
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

const grocerSection = (state=[], action) => {
    switch (action.type) {
        case RC.TAGS_FETCHED:
            return [
                ...state,
                ...action.payload.filter(tag => tag.isGrocerSection)
            ];
        default:
            return state
    }
}

export default combineReducers({
    tags,
    grocerSection
});