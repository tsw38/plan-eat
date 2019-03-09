// given a users preferences, give the basic 7 day span banner
import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Icon from "common/Icon/Icon";
import { CalendarBand, DatesWrapper } from 'styles/components/Calendar/CalendarBand';

class CalendarBanner extends React.Component {
    render() {
        return (
            <CalendarBand>
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
            </CalendarBand>
        )
    }
}

const mapStateToProps = ({user}, props) => ({
    // user: user.account
});

const mapDispatchToProps = {
    // signOut
};

CalendarBanner.defaultProps = {
};

CalendarBanner.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBanner);