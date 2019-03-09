// given a users preferences, give the basic 7 day span banner
import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import DonutChart from 'components/NutritionBand/DonutChart';

import { NutritionBand as StyledNutritionBand } from 'styles/components/NutritionBand/NutritionBand';

class NutritionBand extends React.Component {
    render() {
        return (
            <StyledNutritionBand className="NutritionBand">
                <DonutChart
                    name="Calories"
                    data={{
                        totalCalories: 2000,
                        totalEaten: 500
                    }}
                />
                <DonutChart
                    name="Protein"
                    data={{
                        totalCalories: 900,
                        totalEaten: 200
                    }}
                />
                <DonutChart
                    name="Carbs"
                    data={{
                        totalCalories: 100,
                        totalEaten: 10
                    }}
                />
                <DonutChart
                    name="Fat"
                    data={{
                        totalCalories: 200,
                        totalEaten: 150
                    }}
                />
            </StyledNutritionBand>
        )
    }
}

const mapStateToProps = ({user}, props) => ({
    // user: user.account
});

const mapDispatchToProps = {
    // signOut
};

NutritionBand.defaultProps = {
};

NutritionBand.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(NutritionBand);