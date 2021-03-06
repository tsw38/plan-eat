import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import objectPath from 'object-path';
import {stateChange} from 'utils/object';
import StarRatings from 'react-star-ratings';

import { getUserById } from 'actions/AccountActions';

import Row from 'components/common/Layout/Row';
import Link from "components/common/Link/Link";

import {monochromes} from 'styles/colors';

import * as spacing from 'styles/sizing';
import { RecipeHeader as Header } from 'components/recipe/recipe.styles';

class RecipeHeader extends React.Component {
    componentDidMount() {
        const {
            network,
            uploader,
            getUserById,
        } = this.props;

        if (network && !!uploader && !network[uploader.tag]) {
            getUserById(uploader.tag);
        }
    }

    componentDidUpdate(prevProps) {
        const uploaderState = stateChange(prevProps.uploader, this.props.uploader);

        const {
            network,
            uploader: {
                tag, url
            },
            getUserById
        } = this.props;

        if (uploaderState.defined && uploaderState.changed) {
            if (!!tag && !objectPath.get(network, 'tag')) {
                getUserById(tag);
            }
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

        let calculation = ratings && ratings.length ? ratings.reduce((score, {rating}) => score+=rating, 0)/ratings.length : 1;
        return (
            <Header
                className="Recipe--Header">
                <Row>
                    <h1 className="Recipe--Title">{name}</h1>
                </Row>
                <Row>
                    {!!uploader &&
                        <p className="Recipe--Author">
                            <span className="subtle">Uploaded By:</span>
                            {' '}
                            <Link
                                to={`#${uploader.url}`}>
                                {network[uploader.tag]}
                            </Link>
                        </p>
                    }
                    {!!ratings.length &&
                        <div className="Recipe--Rating">
                            <StarRatings
                                rating={calculation}
                                starRatedColor={monochromes.black}
                                starEmptyColor={monochromes.grey20}
                                starHoverColor={monochromes.black}
                                starDimension={spacing.spacing2lg}
                                starSpacing={spacing.spacing2xs}
                                changeRating={this.handleChangeRating}
                                numberOfStars={5}
                                name='rating'
                            />
                        </div>
                    }
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
    ratings: []
};

RecipeHeader.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeHeader);