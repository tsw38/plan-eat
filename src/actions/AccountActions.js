import {AccountConstants as AC} from 'constants/index';

export const Signin = (values) => (dispatch, getState, api) => {
    dispatch({
        type: AC.SIGN_IN_PENDING,
        payload: values
    })

    return api({
        query: 'signIn',
        body: values
    }).then((resp) => {
        console.warn('api response is', resp);
        return resp;
    })
}