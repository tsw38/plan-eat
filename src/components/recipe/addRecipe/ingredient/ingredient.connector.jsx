import React from "react";
import {connect} from 'react-redux';

class Connector extends React.Component {
    render() {
        const {
            children: propChildren,
            ...props
        } = this.props;
        console.warn('connector props', this.props);

        const children = React.Children.map(propChildren, child => {
            return React.cloneElement(child, {
                ...props,
                ...this.state
            });
        });

        return children || null;
    }
}

const mapStateToProps = (redux, ownProps) => ({
});

const mapDispatchToProps = {
};

Connector.defaultProps = {
};

Connector.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);