import {AccountConstants as AC} from 'constants/index';

export const Signin = (variables) => (dispatch, getState, api) => {
    dispatch({
        type: AC.SIGN_IN_PENDING
    })

    return api({
        query: `
            query SignInUser ($email: String!, $password: String!) {
                signIn (email: $email, password: $password) {
                    uid,
                    emailVerified,
                    refreshToken,
                    permissions,
                    error
                }
            }
        `,
        variables
    }).then(({data}) => {
        const {
            signIn
        } = data.data;

        if(signIn.error.length) {
            dispatch({
                type: AC.SIGN_IN_ERROR,
                payload: signIn.error
            })
        } else {
            dispatch({
                type: AC.SIGN_IN_FETCHED,
                payload: signIn
            })
        }

        return signIn;
    })
}