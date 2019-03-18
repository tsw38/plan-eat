
import {combineReducers} from 'redux';
import {RecipeConstants as RC} from 'constants/index';

const tags = (state = {}, {type, payload}) => {
    switch (type) {
        case RC.TAGS_FETCHED:
            return {
                ...state,
                ...payload
            };
        default:
            return state
    }
}

const grocerSection = (state=[], {type, payload}) => {
    switch (type) {
        case RC.TAGS_FETCHED:
            const forGrocerSection = Object.keys(payload).some(key => !!payload[key].isGrocerSection);
            const groceryTags = forGrocerSection ? payload.filter(tag => tag.isGrocerSection) : [];

            return [
                ...state,
                ...groceryTags
            ];
        default:
            return state
    }
}

export default combineReducers({
    tags,
    grocerSection
});