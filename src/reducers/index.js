import {combineReducers} from 'redux';

import app from 'reducers/AppReducers';
import user from 'reducers/AccountReducers';
import modals from 'reducers/ModalsReducers';
import recipes from 'reducers/RecipeReducers';
import ingredients from 'reducers/IngredientsReducer';

//if I need to initial the reducers with some stuff do it as a function
export default (props) => combineReducers({
    app,
    user,
    modals,
    recipes,
    ingredients
});