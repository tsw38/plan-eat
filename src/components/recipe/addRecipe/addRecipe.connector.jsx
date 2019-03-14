import React from "react";
import {connect} from 'react-redux';

class Connector extends React.Component {
    render() {
        const {
            children: propChildren,
            ...props
        } = this.props;

        const children = React.Children.map(propChildren, child => {
            return React.cloneElement(child, props);
        });

        return children || null;
    }
}

const mapStateToProps = ({app}, ownProps) => ({
});

const mapDispatchToProps = {
};

Connector.defaultProps = {
    name: 'Add Ingredient',
    render: {

    }

};

Connector.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);