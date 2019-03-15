import {combineReducers} from 'redux';
import { ModalConstants as MC } from 'constants';

const modals = (state = {}, action) => {
    switch (action.type) {
		case MC.MODAL_MOUNTED:
			return {
				...state,
				[action.payload]: {
                    ...state[action.payload],
                    isOpen: true
                }
			}
        case MC.MODAL_OPEN:
            return {
                ...state,
                [action.payload.modalId]: {
                    isOpen: true,
                    content: action.payload.content
                }
            }
		case MC.MODAL_CLOSE:
            return {
                ...state,
                [action.payload]: {
                    isOpen: false
                }
            }
        default:
            return state
    }
}

export default modals;