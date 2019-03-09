import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { navigate } from "@reach/router";

import CalendarBand from 'components/Calendar/CalendarBand';

class Overview extends React.Component {
    render() {
        return (
            <div className="Overview">
                <CalendarBand />
            </div>
        );
    }
}

const mapStateToProps = ({user}, props) => ({
    user: user.account
});

const mapDispatchToProps = {
    // signOut
};

Overview.defaultProps = {
};

Overview.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);