// given a users preferences, give the basic 7 day span banner
import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {connect} from 'react-redux';

import Icon from "components/common/Icon/Icon";
import { CalendarDayBand as StyledCalendarDayBand } from 'styles/components/Calendar/CalendarDayBand';

class CalendarDayBand extends React.Component {
    render() {
        return (
            <StyledCalendarDayBand className="CalendarDayBand">

            </StyledCalendarDayBand>
        )
    }
}

const mapStateToProps = ({user}, props) => ({
    // user: user.account
});

const mapDispatchToProps = {
    // signOut
};

CalendarDayBand.defaultProps = {
};

CalendarDayBand.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDayBand);