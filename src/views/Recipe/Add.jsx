import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {convertUnit} from 'utils/convert';

import { getRecipe, getIngredients } from 'actions/RecipeActions';

import Column from 'components/common/Layout/Column';
import RecipeHeader from 'components/containers/Recipe/Header';

import { StyledRecipe } from 'styles/views/Recipe';
import AddRecipeForm from 'components/common/Form/AddRecipe';

class AddRecipe extends React.Component {
    state = {
        name: 'Add Recipe',
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        const {
            name
        } = this.state;

        return (
            <StyledRecipe className="Recipe">
                <AddRecipeForm />
            </StyledRecipe>
        );
    }
}


{/* <RecipeSection
listType="ul"
sectionTitle="Ingredients"
firstSectionChild={(
    <div className="Recipe--Serving-Toggle">
        <Button iconName={'minus'} />
        <Button iconName={'plus'} />
    </div>
)}>
<React.Fragment>
    {scaledIngredients.map((ingredient, index) =>
        <li key={`Ingredient-${index}`}>
            {ingredient.quantity}{ingredient.unit}{'  '}{ingredient.name}
        </li>
    )}
</React.Fragment>
</RecipeSection>

<RecipeSection
listType="ol"
sectionTitle="Directions">
<React.Fragment>
    {thisRecipe.directions.map((step, i) =>
        <li key={`Step-${i}`}>{step}</li>
    )}
</React.Fragment>
</RecipeSection>

<RecipeSection
listType="ul"
sectionTitle="Chef's Notes">
<li>{thisRecipe.notes}</li>
</RecipeSection> */}

{/* <Column>
<div
    className="Recipe--Image"
    style={{backgroundImage: `url(${thisRecipe.images.full})`}}
/>
<Timing
    prepTime={thisRecipe.prepTime}
    cookTime={thisRecipe.cookTime}
/>

<div className="Recipe--Nutrition">
    <h3 className="Recipe--Section--Title">Nutrition Facts (per serving)</h3>
    <div className="Recipe--Nutrition--Table">
        <p className="Calories">
            <span className="category">Calories</span>
            <span className="value">{nutrition.calories}</span>
        </p>
        <p className="Sugar">
            <span className="category">Sugar</span>
            <span className="value">{nutrition.sugar}g</span>
        </p>
        <p className="Protein">
            <span className="category">Protein</span>
            <span className="value">{nutrition.protein}g</span>
        </p>
        <p className="Fiber">
            <span className="category">Fiber</span>
            <span className="value">{nutrition.fiber}g</span>
        </p>
        <p className="Fat">
            <span className="category">Fat</span>
            <span className="value">{nutrition.fat}g</span>
        </p>
        <p className="Carbs">
            <span className="category">Carbs</span>
            <span className="value">{nutrition.carbs}g</span>
        </p>
    </div>
</div>

<div className="Recipe--Tags">
    <h3 className="Recipe--Section--Title">Tags</h3>
    <Button
        className="Button--Primary Button--Small Tag"
        editable={false}
        colorName={'nasaPurple'}>
        Tag1
    </Button>
</div>
</Column> */}










const mapStateToProps = ({recipes, user, ingredients}, props) => ({
    ingredients
});

const mapDispatchToProps = {
    // getRecipe,
    // getIngredients
};

AddRecipe.defaultProps = {
};

AddRecipe.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);