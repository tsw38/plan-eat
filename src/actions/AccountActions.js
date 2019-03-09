import {AccountConstants as AC} from 'constants/index';
import { navigate } from "@reach/router";

export const signIn = (variables) => (dispatch, getState, api) => {
    dispatch({
        type: AC.SIGN_IN_PENDING
    })

    return api({
        query: `
            query SignInUser ($email: String!, $password: String!) {
                signIn (email: $email, password: $password) {
                    uid,
                    emailVerified,
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
            navigate('/');
        }

        return signIn;
    })
}

export const getSession = () => (dispatch, getState, api) => {
    dispatch({
        type: AC.SESSION_PENDING
    })

    return api({
        query: `
            query SignInUser {
                signIn {
                    uid,
                    emailVerified,
                    permissions,
                    error
                }
            }
        `
    }).then(({data}) => {
        const {
            signIn
        } = data.data;

        if(signIn.error.length) {
            dispatch({
                type: AC.SESSION_ERROR,
                payload: signIn.error
            })
        } else {
            dispatch({
                type: AC.SESSION_FETCHED,
                payload: signIn
            })
        }
    })
}

export const signOut = () => (dispatch, getState, api) => {
    dispatch({
        type: AC.SIGN_OUT_PENDING
    })

    return api({
        query: `
            query SignOutUser {
                signOut {
                    error
                }
            }
        `
    }).then(({data}) => {
        const {
            signOut
        } = data.data;

        if(!!signOut.error) {
            dispatch({
                type: AC.SIGN_OUT_ERROR,
                payload: signOut.error
            })
        } else {
            dispatch({
                type: AC.SIGN_OUT_FETCHED,
                payload: signOut
            })
            window.location = "/";
        }
    })
}