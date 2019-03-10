import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {convertUnit} from 'utils/convert';

import { StyledRecipe,
    // RecipeSection
} from 'styles/views/Recipe';

import { getRecipe, getIngredients } from 'actions/RecipeActions';

import Row from 'common/Layout/Row';
import Column from 'common/Layout/Column';
import Button from "common/Button/Button";
import RecipeHeader from 'components/Recipe/Header';
import RecipeSection from 'components/Recipe/Section';

import * as colors from 'styles/colors';
import * as spacing from 'styles/sizing';

class Recipe extends React.Component {
    state = {
        servingSize: 0,
        recipeFound: undefined
    }

    componentDidMount() {
        const {
            recipes,
            getRecipe,
            getIngredients,
            recipe: recipeSlug,
            ingredients: ingredientsReducer
        } = this.props;

        if(!recipes.recipe[recipeSlug]) {
            getRecipe(recipeSlug).then(({uploadedBy, ingredients, servingSize, slug}) => {
                this.setState({
                    servingSize,
                    recipeFound: !!slug
                });

                const pendingIngredients = !!ingredients && ingredients.filter(ingredient => !ingredientsReducer[ingredient.id])
                getIngredients(pendingIngredients);
            })
        }
    }

    componentDidUpdate(prevProps) {
        //if thisRecipe is changed, you need to get all new unrequested info (source, uploadedBy, tags, ingredients)
    }

    convertIngredients = () => {
        const {
            thisRecipe,
            ingredients: storedIngredients
        } = this.props;

        const ingredients = !!Object.keys(storedIngredients).length && thisRecipe.ingredients.reduce((temp, ingredient) => {
            const mergedIngredient = {
                ...ingredient,
                ...storedIngredients[ingredient.id]
            };

            if (mergedIngredient.name) {
                const converted = convertUnit(mergedIngredient.quantity, mergedIngredient.unit, true);

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

        return ingredients;
    }

    render() {
        if (!this.props.thisRecipe && this.state.recipeFound === undefined) {
            return null;
        }
        if (this.state.recipeFound === false) {
            return (<div>RECIPE NOT FOUND</div>)
        }

        const { thisRecipe }= this.props;
        const {servingSize} = this.state;
        const ingredients   = this.convertIngredients();
        const nutrition     = {};

        // const nutrition = !!Object.keys(storedIngredients).length && !!thisRecipe.ingredients && thisRecipe.ingredients.map(ingred => {
        //     const quantity = ingred.quantity/100;

        //     const {calories, protein, fat, carbs} = storedIngredients[ingred.id].nutrition;

        //     return {
        //         calories: Math.ceil(calories*quantity),
        //         protein:  Math.ceil(protein*quantity),
        //         fat: 	  Math.ceil(fat*quantity),
        //         carbs:	  Math.ceil(carbs.absolute*quantity),
        //         fiber: 	  Math.ceil(carbs.dietaryFiber*quantity),
        //         sugar: 	  Math.ceil(carbs.sugar*quantity)
        //     };
        // }).reduce((finalCalcs, ingredientNuts) => {
        //     return {
        //         ...finalCalcs,
        //         calories:Math.ceil(ingredientNuts.calories/this.state.servingSize + (finalCalcs.calories || 0)),
        //         protein: Math.ceil(ingredientNuts.protein/this.state.servingSize + (finalCalcs.protein || 0)),
        //         fat: 	 Math.ceil(ingredientNuts.fat/this.state.servingSize + (finalCalcs.fat || 0)),
        //         carbs:	 Math.ceil(ingredientNuts.carbs/this.state.servingSize + (finalCalcs.carbs || 0)),
        //         fiber: 	 Math.ceil(ingredientNuts.fiber/this.state.servingSize + (finalCalcs.fiber || 0)),
        //         sugar: 	 Math.ceil(ingredientNuts.sugar/this.state.servingSize + (finalCalcs.sugar || 0))
        //     }
        // }, {});

        // console.warn(nutrition);

        return (
            <StyledRecipe className="Recipe">
                <Column>
                    <RecipeHeader
                        name={thisRecipe.name}
                        ratings={thisRecipe.ratings}
                        uploader={{
                            tag: thisRecipe.uploadedBy,
                            url: "it-dont-matter"
                        }}
                    />

                    {ingredients &&
                        <RecipeSection
                            listType="ul"
                            sectionTitle="Ingredients"
                            firstSectionChild={(
                                <div className="Recipe--Serving-Toggle">
                                    <Button iconName={'minus'} />
                                    <Button iconName={'plus'} />
                                </div>
                            )}>
                            <React.Fragment>
                                {ingredients.map((ingredient, index) =>
                                    <li key={`Ingredient-${index}`}>
                                        {ingredient.quantity}{ingredient.unit} {ingredient.name}
                                    </li>
                                )}
                            </React.Fragment>
                        </RecipeSection>
                    }

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
                    </RecipeSection>
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
                        <h3 className="Recipe--Section--Title">Nutrition Facts (per serving)</h3>
                        <div className="Recipe--Nutrition--Table">
                            <p className="Calories">
                                <span className="category">Calories</span>
                                <span className="value">{nutrition.calories}</span>
                            </p>
                            <p className="Sugar">
                                <span className="category">Sugar</span>
                                <span className="value">{nutrition.sugar}</span>
                            </p>
                            <p className="Protein">
                                <span className="category">Protein</span>
                                <span className="value">{nutrition.protein}</span>
                            </p>
                            <p className="Fiber">
                                <span className="category">Fiber</span>
                                <span className="value">{nutrition.fiber}</span>
                            </p>
                            <p className="Fat">
                                <span className="category">Fat</span>
                                <span className="value">{nutrition.fat}</span>
                            </p>
                            <p className="Carbs">
                                <span className="category">Carbs</span>
                                <span className="value">{nutrition.carbs}</span>
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
    getIngredients
};

Recipe.defaultProps = {
};

Recipe.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);