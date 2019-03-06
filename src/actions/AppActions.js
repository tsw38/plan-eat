import {RoutingConstants as RC} from 'constants/index';

export const onLocationChange = (location) => (dispatch, getState, api) => {
    console.warn('is this running', getState(), api);
    dispatch({
        type: RC.LOCATION_CHANGE,
        payload: location
    })
    return;
}