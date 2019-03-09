import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { navigate } from "@reach/router";

import RecipeCarousel from 'components/Recipe/Carousel';
import CalendarBand from 'components/Calendar/CalendarBand';
import NutritionBand from 'components/NutritionBand/NutritionBand';
import CalendarDayBand from 'components/Calendar/CalendarDayBand';

import { StyledOverview } from 'styles/views/Overview';

class Overview extends React.Component {
    render() {
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