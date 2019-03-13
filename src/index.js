import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createClientStore} from 'utils/createStore';

import App from 'components/app/app.container';

const ClientStore = createClientStore();
window.planEat = ClientStore;

ReactDOM.render(
    <Provider store={ClientStore}>
        <App />
    </Provider>, document.getElementById('plan-eat')
);

ClientStore.subscribe(() => {
    // console.warn('what is happening', ClientStore.getState())
})

ClientStore.dispatch((dispatch) => {
    // dispatch(onLocationChange())
})