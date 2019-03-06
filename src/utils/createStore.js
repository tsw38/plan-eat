import reducers from 'reducers';
import {
    compose,
    createStore,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';



const simpleMiddleware = (store) => (next) => (action) => {
    // console.warn('simple middleware sees three things', store, next, action);
    next(action);
}

export const createClientStore = (props) => {
    const rootReducer = reducers(props);

    const options = {
        isServer: false
    };

    //on the server, build the store for the client code differently

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer, props ? props.state : {},
        composeEnhancers(applyMiddleware(
            simpleMiddleware,
            thunk,
            logger
        ))
    )
}