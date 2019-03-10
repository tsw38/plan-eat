import {combineReducers} from 'redux';

import user from 'reducers/AccountReducers';
import modals from 'reducers/ModalsReducers';
import recipes from 'reducers/RecipeReducers';

//if I need to initial the reducers with some stuff do it as a function
export default (props) => combineReducers({
    user,
    modals,
    recipes
});