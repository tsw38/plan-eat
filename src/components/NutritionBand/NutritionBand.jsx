// given a users preferences, give the basic 7 day span banner
import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Icon from "common/Icon/Icon";
import { NutritionBand as StyledNutritionBand } from 'styles/components/NutritionBand/NutritionBand';

class NutritionBand extends React.Component {
    render() {
        return (
            <StyledNutritionBand className="NutritionBand">

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