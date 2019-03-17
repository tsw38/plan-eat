import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {convertUnit} from 'utils/convert';

import { getRecipe, getIngredients, getTags } from 'actions/RecipeActions';

import Button from 'components/common/button';
import Link from "components/common/Link/Link";
import Row from 'components/common/Layout/Row';
import Column from 'components/common/Layout/Column';
import Timing from 'components/recipe/time/time.container';

import RecipeHeader from 'components/recipe/header/header.container';
import RecipeSection from 'components/recipe/section/section.container';

import { StyledRecipe } from 'components/recipe/recipe.styles';

import {polychromes} from 'styles/colors';
import {generateSeed} from 'utils/array';

class Recipe extends React.Component {
    state = {
        servingSize: 0,
        recipeFound: undefined,
        tagColorArr: []
    }

    componentDidMount() {
        const {
            recipes,
            getTags,
            getRecipe,
            seedString,
            getIngredients,
            tags: tagsReducer,
            recipe: recipeSlug,
            ingredients: ingredientsReducer
        } = this.props;

        if(!recipes.recipe[recipeSlug]) {
            getRecipe(recipeSlug).then(({uploadedBy, ingredients, servingSize, slug, tags, ...rest}) => {
                this.setState({
                    servingSize,
                    recipeFound: !!slug
                });

                const pendingIngredients = !!ingredients && ingredients.filter(({id}) => !ingredientsReducer[id])
                getIngredients(pendingIngredients);

                const pendingTags = !!tags && tags.filter((id) => !tagsReducer[id])
                getTags(pendingTags);

                this.setState({
                    tagColorArr: generateSeed(seedString, Object.keys(polychromes))
                })
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

        const { thisRecipe,ingredients,tags } = this.props;
        const {servingSize, tagColorArr}      = this.state;
        const scaledIngredients               = this.convertIngredients();

        const nutrition =
            !!Object.keys(scaledIngredients).length &&
            !!thisRecipe.ingredients &&
            thisRecipe.ingredients.map(ingred => {
                const quantity = ingred.quantity/100;

                const {calories, protein, fat, carbs} = ingredients[ingred.id].nutrition;

                return {
                    calories: Math.ceil(calories*quantity),
                    protein:  Math.ceil(protein*quantity),
                    fat: 	  Math.ceil(fat*quantity),
                    carbs:	  Math.ceil(carbs.absolute*quantity),
                    fiber: 	  Math.ceil(carbs.dietaryFiber*quantity),
                    sugar: 	  Math.ceil(carbs.sugar*quantity)
                };
        }).reduce((finalCalcs, ingredientNuts) => {
            return {
                ...finalCalcs,
                calories:Math.ceil(ingredientNuts.calories/this.state.servingSize + (finalCalcs.calories || 0)),
                protein: Math.ceil(ingredientNuts.protein/this.state.servingSize + (finalCalcs.protein || 0)),
                fat: 	 Math.ceil(ingredientNuts.fat/this.state.servingSize + (finalCalcs.fat || 0)),
                carbs:	 Math.ceil(ingredientNuts.carbs/this.state.servingSize + (finalCalcs.carbs || 0)),
                fiber: 	 Math.ceil(ingredientNuts.fiber/this.state.servingSize + (finalCalcs.fiber || 0)),
                sugar: 	 Math.ceil(ingredientNuts.sugar/this.state.servingSize + (finalCalcs.sugar || 0))
            }
        }, {});

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

                    {scaledIngredients &&
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
                                {scaledIngredients.map((ingredient, index) =>
                                    <li key={`Ingredient-${index}`}>
                                        {ingredient.quantity}{ingredient.unit}{'  '}{ingredient.name}
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
                        {!!Object.keys(tags) && Object.keys(tags).map((tagId,index) =>
                            <Link
                                key={tagId}
                                className={classNames(
                                    'Button',
                                    'Button--Primary',
                                    'Button--Small',
                                    {[`Button--${!!tagColorArr.length && tagColorArr[index%tagColorArr.length]}`]: !!tagColorArr.length},
                                    'Tag'
                                )}
                                to={`#/tag/${tagId}`}>
                                {tags[tagId]}
                            </Link>
                        )}
                    </div>
                </Column>
            </StyledRecipe>
        );
    }
}

const mapStateToProps = ({recipes, user, ingredients, tags}, props) => ({
    tags: tags.tags,
    recipes,
    seedString: user.uid || '',
    network: user.network,
    thisRecipe: recipes.recipe[props.recipe],
    ingredients
});

const mapDispatchToProps = {
    getTags,
    getRecipe,
    getIngredients
};

Recipe.defaultProps = {
};

Recipe.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);