import {ToastConstants as TC} from 'constants/index';

export const pushToast = (notification) => (dispatch) => {
    dispatch({
        type: TC.TOAST_PUSHED,
        payload: notification
    });

    return notification;
}

export const popToast = () => (dispatch) => {
    dispatch({
        type: TC.TOAST_POPPED
    });
}