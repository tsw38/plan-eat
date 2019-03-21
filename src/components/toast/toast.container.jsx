import React from "react";

import Component from 'components/toast/toast.component';
import Connector from 'components/toast/toast.connector';

class ToastContainer extends React.Component {
    render() {
        return (
            <Connector>
                <Component />
            </Connector>
        );
    }
}

ToastContainer.defaultProps = {
};

ToastContainer.propTypes = {
};

export default ToastContainer;