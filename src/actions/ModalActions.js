import {ModalConstants as MC} from 'constants';

export function initialize(modalId) {
	return {
		type: MC.MODAL_MOUNTED,
		payload: modalId
	};
}

export const toggleModal = (modalId) => (dispatch, getState, api) => {
	const thisModal = getState().modals.modals[modalId];

    dispatch({
        type: thisModal ? MC.MODAL_CLOSE : MC.MODAL_OPEN,
        payload: modalId
    })
}