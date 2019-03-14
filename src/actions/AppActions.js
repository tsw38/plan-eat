import {
    StateConstants as SC
} from 'constants/index';

export const onLocationChange = (location) => (dispatch, getState, api) => {
    dispatch({
        type: RC.LOCATION_CHANGE,
        payload: location
    })
    return;
}

export const setLoader = (isLoading) => (dispatch, getState, api) => {
    dispatch({
        type: SC.LOADING,
        payload: isLoading
    })
    return;
}