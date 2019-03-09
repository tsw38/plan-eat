// given a users preferences, give the basic 7 day span banner
import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Icon from "common/Icon/Icon";
import { CalendarBand as StyledCalendarBand, DatesWrapper } from 'styles/components/Calendar/CalendarBand';

class CalendarBand extends React.Component {
    render() {
        return (
            <StyledCalendarBand>
                <Icon
                    name="chevron-left"
                />
                <DatesWrapper>
                    <div className="container">
                        //TODO: ADD DATE
                    </div>
                </DatesWrapper>
                <Icon
                    name="chevron-right"
                />
            </StyledCalendarBand>
        )
    }
}

const mapStateToProps = ({user}, props) => ({
    // user: user.account
});

const mapDispatchToProps = {
    // signOut
};

CalendarBand.defaultProps = {
};

CalendarBand.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBand);