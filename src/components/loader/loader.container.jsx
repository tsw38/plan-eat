import React from "react";

import Component from 'components/loader/loader';
import Connector from 'components/loader/loader.connector';

class LoaderContainer extends React.Component {
    render() {
        return (
            <Connector>
                <Component />
            </Connector>
        );
    }
}

LoaderContainer.defaultProps = {
};

LoaderContainer.propTypes = {
};

export default LoaderContainer;