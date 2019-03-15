import {ModalConstants as MC} from 'constants';

export function initialize(modalId) {
	return {
		type: MC.MODAL_MOUNTED,
		payload: modalId
	};
}

export const toggleModal = (modalId) => (dispatch, getState, api) => {
    const thisModal = getState().modals[modalId];

    dispatch({
        type: thisModal.isOpen ? MC.MODAL_CLOSE : MC.MODAL_OPEN,
        payload: modalId
    })
}

export const injectModal = ({modalId, content}) => (dispatch, getState, api) => {
    dispatch({
        type: MC.MODAL_OPEN,
        payload: {
            modalId,
            content
        }
    });

    return;
}