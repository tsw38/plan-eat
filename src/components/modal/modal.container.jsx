import React from "react";

import Component from 'components/modal/modals';
import Connector from 'components/modal/modal.connector';

class ModalContainer extends React.Component {
    render() {
        return (
            <Connector>
                <Component />
            </Connector>
        );
    }
}

ModalContainer.defaultProps = {
};

ModalContainer.propTypes = {
};

export default ModalContainer;