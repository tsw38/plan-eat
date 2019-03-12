// given a users preferences, give the basic 7 day span banner
import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Icon from "components/common/Icon/Icon";
import { CarouselWrapper } from 'styles/components/containers/Recipe/Carousel';

class RecipeCarousel extends React.Component {
    render() {
        return (
            <CarouselWrapper className="RecipeCarousel">

            </CarouselWrapper>
        )
    }
}

const mapStateToProps = ({user}, props) => ({
    // user: user.account
});

const mapDispatchToProps = {
    // signOut
};

RecipeCarousel.defaultProps = {
};

RecipeCarousel.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCarousel);