import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import objectPath from 'object-path';

import {convertUnit} from 'utils/convert';

import { StyledRecipe, RecipeHeader, RecipeSection } from 'styles/views/Recipe';

import { getUserById } from 'actions/AccountActions';
import { getRecipe, getIngredients } from 'actions/RecipeActions';

import Row from 'common/Layout/Row';
import Link from "common/Link/Link";
import Column from 'common/Layout/Column';
import Button from "common/Button/Button";

import * as colors from 'styles/colors';
// import { userInfo } from "os";

class Recipe extends React.Component {
    componentDidMount() {
        const {
            network,
            recipes,
            getRecipe,
            getUserById,
            getIngredients,
            recipe: recipeSlug
        } = this.props;

        if(!recipes.recipe[recipeSlug]) {
            getRecipe(recipeSlug).then(({uploadedBy, ingredients}) => {
                if (!network[uploadedBy]) {
                    getUserById(uploadedBy);
                }

                const pendingIngredients = ingredients.filter(ingredient => !this.props.ingredients[ingredient.id])
                getIngredients(pendingIngredients);
            })
        }
    }

    componentDidUpdate(prevProps) {
        //if thisRecipe is changed, you need to get all new unrequested info (source, uploadedBy, tags, ingredients)
    }

    render() {
        const {
            thisRecipe,
            network,
            ingredients: storedIngredients
        } = this.props;

        if (!thisRecipe) {
            return null;
        }

        const uploadedBy = network[thisRecipe.uploadedBy] || '';

        const ingredients = storedIngredients && thisRecipe.ingredients.reduce((temp, ingredient) => {
            const mergedIngredient = {
                ...ingredient,
                ...storedIngredients[ingredient.id]
            };

            if (mergedIngredient.name) {
                const converted = convertUnit(mergedIngredient.quantity, mergedIngredient.unit, true);
                // console.warn(converted);

                return [
                    ...temp,
                    {
                        ...mergedIngredient,
                        ...converted
                    }
                ]
            }
            return temp;
        }, []);


        return (
            <StyledRecipe className="Recipe">
                <Column>
                    <RecipeHeader
                        className="Recipe--Header">
                        <Row>
                            <h1 className="Recipe--Title">
                                {thisRecipe.name}
                            </h1>
                        </Row>
                        <Row>
                            <p className="Recipe--Author">
                                <span className="subtle">Uploaded By:</span>
                                {' '}
                                <Link
                                    to="#thiswillbesomethinglater">
                                    {uploadedBy}
                                </Link>
                            </p>
                            <div className="Recipe--Rating">
                                <Button iconName={'star-o'} />
                                <Button iconName={'star-o'} />
                                <Button iconName={'star-o'} />
                                <Button iconName={'star-o'} />
                                <Button iconName={'star-o'} />
                            </div>
                        </Row>
                    </RecipeHeader>

                    {ingredients &&
                        <RecipeSection
                            className="Recipe--Section">
                            <Row>
                                <h3 className="Recipe--Section--Title">Ingredients</h3>
                                <div className="Recipe--Serving-Toggle">
                                    <Button iconName={'minus'} />
                                    <Button iconName={'plus'} />
                                </div>
                            </Row>
                            <ul className="Recipe--Ingredient-List">
                                {ingredients.map((ingredient, index) =>
                                    <li key={`Ingredient-${index}`}>
                                        {ingredient.quantity}{ingredient.unit} {ingredient.name}
                                    </li>
                                )}
                            </ul>
                        </RecipeSection>
                    }

                    <RecipeSection
                        className="Recipe--Section">
                        <Row>
                            <h3 className="Recipe--Section--Title">Directions</h3>
                        </Row>
                        <ol className="Recipe--Ingredient-List">
                            {thisRecipe.directions.map((step, i) =>
                                <li key={`Step-${i}`}>{step}</li>
                            )}
                        </ol>
                    </RecipeSection>

                    {thisRecipe.notes &&
                        <RecipeSection
                            className="Recipe--Section">
                            <Row>
                                <h3 className="Recipe--Section--Title">Chef's Notes</h3>
                            </Row>
                            <ul className="Recipe--Ingredient-List">
                                <li>{thisRecipe.notes}</li>
                            </ul>
                        </RecipeSection>
                    }

                </Column>
                <Column>
                    <div
                        className="Recipe--Image"
                        style={{backgroundImage: `url(${thisRecipe.images.full})`}}
                    />
                    <div className="Recipe--Time">
                        <div className="Recipe--Time--Prep">
                            <h6>Prep Time</h6>
                            <h5>{thisRecipe.prepTime} minutes</h5>
                        </div>
                        <div className="Recipe--Time--Cook">
                            <h6>Cook Time</h6>
                            <h5>{thisRecipe.cookTime} minutes</h5>
                        </div>
                    </div>
                    <div className="Recipe--Nutrition">
                        <h3 className="Recipe--Section--Title">Nutrition Facts</h3>
                        <div className="Recipe--Nutrition--Table">
                            <p className="Calories">
                                <span className="category">Calories</span>
                                <span className="value">450</span>
                            </p>
                            <p className="Sugar">
                                <span className="category">Sugar</span>
                                <span className="value">20g</span>
                            </p>
                            <p className="Protein">
                                <span className="category">Protein</span>
                                <span className="value">30g</span>
                            </p>
                            <p className="Fiber">
                                <span className="category">Fiber</span>
                                <span className="value">55g</span>
                            </p>
                            <p className="Fat">
                                <span className="category">Fat</span>
                                <span className="value">30g</span>
                            </p>
                            <p className="Carbs">
                                <span className="category">Carbs</span>
                                <span className="value">10g</span>
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
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'casandora'}>
                            Some Really long tag name
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'carribean'}>
                            Chicken
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'megaMan'}>
                            Meal Prep
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'amour'}>
                            SuperDuper
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'nasaPurple'}>
                            Tag1
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'casandora'}>
                            Some Really long tag name
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'carribean'}>
                            Chicken
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'megaMan'}>
                            Meal Prep
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'amour'}>
                            SuperDuper
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'nasaPurple'}>
                            Tag1
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'casandora'}>
                            Some Really long tag name
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'carribean'}>
                            Chicken
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'megaMan'}>
                            Meal Prep
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'amour'}>
                            SuperDuper
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'nasaPurple'}>
                            Tag1
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'casandora'}>
                            Some Really long tag name
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'carribean'}>
                            Chicken
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'megaMan'}>
                            Meal Prep
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'amour'}>
                            SuperDuper
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'nasaPurple'}>
                            Tag1
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'casandora'}>
                            Some Really long tag name
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'carribean'}>
                            Chicken
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'megaMan'}>
                            Meal Prep
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'amour'}>
                            SuperDuper
                        </Button>
                    </div>
                </Column>
            </StyledRecipe>
        );
    }
}

const mapStateToProps = ({recipes, user, ingredients}, props) => ({
    recipes,
    network: user.network,
    thisRecipe: recipes.recipe[props.recipe],
    ingredients
});

const mapDispatchToProps = {
    getRecipe,
    getUserById,
    getIngredients
};

Recipe.defaultProps = {
};

Recipe.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);