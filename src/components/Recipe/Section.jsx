import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {convertUnit} from 'utils/convert';

import { StyledRecipe, RecipeSection } from 'styles/views/Recipe';

import { getRecipe, getIngredients } from 'actions/RecipeActions';

import Row from 'common/Layout/Row';
import Column from 'common/Layout/Column';
import Button from "common/Button/Button";
import RecipeHeader from 'components/Recipe/Header';

import * as colors from 'styles/colors';
import * as spacing from 'styles/sizing';

class Section extends React.Component {
    render() {
        const {
            children,
            listType,
            sectionTitle,
            firstSectionChild
        } = this.props;

        const ListParent = listType;
        // {ingredients &&
        //     <RecipeSection
        //         className="Recipe--Section">
        //         <Row>
        //             <h3 className="Recipe--Section--Title">Ingredients</h3>
        //             <div className="Recipe--Serving-Toggle">
        //                 <Button iconName={'minus'} />
        //                 <Button iconName={'plus'} />
        //             </div>
        //         </Row>
        //         <ul className="Recipe--Ingredient-List">
        //             {ingredients.map((ingredient, index) =>
        //                 <li key={`Ingredient-${index}`}>
        //                     {ingredient.quantity}{ingredient.unit} {ingredient.name}
        //                 </li>
        //             )}
        //         </ul>
        //     </RecipeSection>
        // }

        // <RecipeSection
        //     className="Recipe--Section">
        //     <Row>
        //         <h3 className="Recipe--Section--Title">Directions</h3>
        //     </Row>
        //     <ol className="Recipe--Ingredient-List">
        //         {thisRecipe.directions.map((step, i) =>
        //             <li key={`Step-${i}`}>{step}</li>
        //         )}
        //     </ol>
        // </RecipeSection>

        // {thisRecipe.notes &&
        //     <RecipeSection
        //         className="Recipe--Section">
        //         <Row>
        //             <h3 className="Recipe--Section--Title">Chef's Notes</h3>
        //         </Row>
        //         <ul className="Recipe--Ingredient-List">
        //             <li>{thisRecipe.notes}</li>
        //         </ul>
        //     </RecipeSection>
        // }
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
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