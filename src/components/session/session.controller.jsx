import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { getSession } from 'actions/AccountActions';

class Session extends React.Component {
    componentWillMount() {
        this.props.getSession();
    }

    render() {
        return null;
    }
}

Session.defaultProps = {}

Session.propTypes = {
    user: PropTypes.object,
    getSession: PropTypes.func
}


const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {
    getSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Session);