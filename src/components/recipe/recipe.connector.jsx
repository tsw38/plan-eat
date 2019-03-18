import React from "react";
import {connect} from 'react-redux';

class Connector extends React.Component {
    state = {
    }

    render() {
        const {
            children: propChildren,
            ...props
		} = this.props;

        const children = React.Children.map(propChildren, child => {
            return React.cloneElement(child, {
				// props
				...props,
				// state
				...this.state,
				// functions
            });
        });

        return children || null;
    }
}

const mapStateToProps = ({app}, ownProps) => ({
});

const mapDispatchToProps = {
};

Connector.defaultProps = {
};

Connector.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);