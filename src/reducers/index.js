import {combineReducers} from 'redux';

import user from 'reducers/UserReducers';
import modals from 'reducers/ModalsReducers';

//if I need to initial the reducers with some stuff do it as a function
export default (props) => combineReducers({
    user,
    modals
});