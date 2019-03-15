import React from "react";
import {connect} from 'react-redux';

class Modal extends React.Component {
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

const mapStateToProps = ({modals}, ownProps) => ({
    modals
});

const mapDispatchToProps = {
};

Modal.defaultProps = {
};

Modal.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);