import React from "react";
import {connect} from 'react-redux';

class ToastConnector extends React.Component {
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

const mapStateToProps = ({toast}, ownProps) => ({
    toast
});

const mapDispatchToProps = {
};

ToastConnector.defaultProps = {
};

ToastConnector.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastConnector);