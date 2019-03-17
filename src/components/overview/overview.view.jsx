import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { navigate } from "@reach/router";

import CalendarBand from 'components/calendar/CalendarBand';
import CalendarDayBand from 'components/calendar/CalendarDayBand';
import RecipeCarousel from 'components/recipe/carousel/carousel.container';
import NutritionBand from 'components/NutritionBand/NutritionBand';

import { StyledOverview } from 'styles/views/Overview';

class Overview extends React.Component {
    render() {
        const {uid} = this.props.user;

        return (
            <StyledOverview
                className="Overview">
                <CalendarBand />
                <NutritionBand/>
                <CalendarDayBand />
                <RecipeCarousel />
            </StyledOverview>
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