import React from "react";
import {connect} from 'react-redux';
import objectPath from 'object-path';

import Config from 'config/ModalsConfig';

class Connector extends React.Component {
    render() {
        const {
            children: propChildren,
            ...props
        } = this.props;

        const children = React.Children.map(propChildren, child => {
            return React.cloneElement(child, {
                ...props,
                Config
            });
        });

        return children || null;
    }
}

const mapStateToProps = ({app, modals}, ownProps) => ({
    appLoading: app.isLoading,
    modal: objectPath.get(modals, Config.ADD_INGREDIENT_MODAL.id)
});

const mapDispatchToProps = {
};

Connector.defaultProps = {
};

Connector.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);