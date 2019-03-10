import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { RecipeSection } from 'styles/views/Recipe';

import Row from 'common/Layout/Row';

const Section = ({
    children,
    listType,
    sectionTitle,
    firstSectionChild
}) => {
    const ListParent = listType;

    return (
        <RecipeSection
            className="Recipe--Section">
            <Row>
                <h3 className="Recipe--Section--Title">{sectionTitle}</h3>
                {firstSectionChild}
            </Row>
            <ListParent className="Recipe--Section-List">
                {children}
            </ListParent>
        </RecipeSection>
    );
}

const mapStateToProps = ({recipes, user, ingredients}, props) => ({
});

const mapDispatchToProps = {
};

Section.defaultProps = {
};

Section.propTypes = {
    listType: PropTypes.oneOf(['ul', 'ol']),
    content: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.any
    ])
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);