import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import StarRatings from 'react-star-ratings';

import { RecipeHeader as Header } from 'styles/views/Recipe';

import Row from 'common/Layout/Row';
import Link from "common/Link/Link";

import * as colors from 'styles/colors';
import * as spacing from 'styles/sizing';

import { getUserById } from 'actions/AccountActions';

class RecipeHeader extends React.Component {
    componentWillMount() {
        const {
            network,
            uploader,
            getUserById,
        } = this.props;

        if (!network[uploader.tag]) {
            getUserById(uploader.tag);
        }
    }

    handleChangeRating = () => {
        console.warn('clicking here is going to change the rating dude');
    }

    render() {
        const {
            name,
            ratings,
            network,
            uploader
        } = this.props;

        let calculation = ratings.length ? ratings.reduce((score, {rating}) => score+=rating, 0)/ratings.length : 1;
        return (
            <Header
                className="Recipe--Header">
                <Row>
                    <h1 className="Recipe--Title">{name}</h1>
                </Row>
                <Row>
                    <p className="Recipe--Author">
                        <span className="subtle">Uploaded By:</span>
                        {' '}
                        <Link
                            to={`#${uploader.url}`}>
                            {network[uploader.tag]}
                        </Link>
                    </p>
                    <div className="Recipe--Rating">
                        <StarRatings
                            rating={calculation}
                            starRatedColor={colors.imperialPrimer}
                            starEmptyColor={colors.ballerina}
                            starHoverColor={colors.imperialPrimer}
                            starDimension={spacing.spacing2lg}
                            starSpacing={spacing.spacing2xs}
                            changeRating={this.handleChangeRating}
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                </Row>
            </Header>
        );
    }
}

const mapStateToProps = ({user},  props) => ({
    network: user.network
});

const mapDispatchToProps = {
    getUserById
};

RecipeHeader.defaultProps = {
};

RecipeHeader.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeHeader);