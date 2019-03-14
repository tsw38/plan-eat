import React from "react";
import {connect} from 'react-redux';

class Connector extends React.Component {
    render() {
        const {
            children: propChildren,
            ...props
        } = this.props;

        const children = React.Children.map(propChildren, child => React.cloneElement(child, props));

        return children || null;
    }
}

const mapStateToProps = ({app}, ownProps) => ({
    isLoading: app.loading
});

const mapDispatchToProps = {
};

Loader.defaultProps = {
};

Loader.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);