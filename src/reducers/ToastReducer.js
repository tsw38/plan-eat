

import {ToastConstants as TC} from 'constants/index';

export default (state = [], {type, payload}) => {
    switch (type) {
        case TC.TOAST_PUSHED:
            return [payload, ...state];
        case TC.TOAST_POPPED:
            return state.slice(0, -1);
        default:
            return state;
    }
}