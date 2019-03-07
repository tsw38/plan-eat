import {combineReducers} from 'redux';
import { ModalConstants as MC } from 'constants';

const modals = (state = {}, action) => {
    switch (action.type) {
		case MC.MODAL_MOUNTED:
			return {
				...state,
				[action.payload]: true
			}
		case MC.MODAL_OPEN:
		case MC.MODAL_CLOSE:
			return {
				...state,
				[action.payload]: !state[action.payload]
			}
        default:
            return state
    }
}

export default combineReducers({
    modals
});