// given a users preferences, give the basic 7 day span banner
import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DonutChart from "react-svg-donut-chart"

import { StyledDonutChart } from 'styles/components/NutritionBand/DonutChart';

import * as colors from 'styles/colors';

class NutritionDonutChart extends React.Component {
    render() {
        const {
            name,
            data
        } = this.props;

        return (
            <StyledDonutChart className="DonutChart">
                <DonutChart data={[
                    { value: data.totalCalories - data.totalEaten, stroke: colors.ballerina, strokeWidth: 2 },
                    { value: data.totalEaten, stroke: colors.stormPetrel, strokeWidth: 3 },
                ]} />
                <h2 className="DonutChart--Name">{name}</h2>
            </StyledDonutChart>
        )
    }
}

const mapStateToProps = ({user}, props) => ({
    // user: user.account
});

const mapDispatchToProps = {
    // signOut
};

NutritionDonutChart.defaultProps = {
};

NutritionDonutChart.propTypes = {
    name: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(NutritionDonutChart);