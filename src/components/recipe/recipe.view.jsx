import React from "react";
import objectPath from 'object-path';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {convertUnit} from 'utils/convert';
import {stateChange} from 'utils/object';

import { getRecipe, getIngredients, getTags } from 'actions/RecipeActions';

import Button from 'components/common/button';
import Link from "components/common/Link/Link";
import Column from 'components/common/Layout/Column';
import Timing from 'components/recipe/time/time.container';

import RecipeHeader from 'components/recipe/header/header.container';
import RecipeSection from 'components/recipe/section/section.container';

import { StyledRecipe } from 'components/recipe/recipe.styles';

import {polychromes} from 'styles/colors';
import {generateSeed} from 'utils/array';

class Recipe extends React.Component {
    state = {
        nutrition: {},
        servingSize: 1,
        recipeFound: undefined,
        tagColorArr: generateSeed(this.props.seedString, Object.keys(polychromes)),
        scaledIngredients: [],
    }

    componentDidMount() {
        this.handleGetRecipe();
    }

    componentDidUpdate(prevProps) {
        const url = stateChange(prevProps.recipeSlug, this.props.recipeSlug);

        if (url.defined && url.changed) {
            this.handleGetRecipe();
        }
    }

    handleGetRecipe = () => {
        const {
            recipes,
            getTags,
            getRecipe,
            recipeSlug,
            getIngredients,
            tags: tagsReducer,
            ingredients: ingredientsReducer
        } = this.props;


        this.setState({ recipeFound: false });

        if(!recipes[recipeSlug]) {
            getRecipe(recipeSlug).then(({uploadedBy, ingredients, servingSize, slug, tags, ...rest}) => {
                this.setState({
                    servingSize,
                    recipeFound: !!slug
                });

                const pendingIngredients = !!ingredients && ingredients.filter(({id}) => !ingredientsReducer[id])
                if (!!pendingIngredients) {
                    getIngredients(pendingIngredients).then(() => {
                        this.setState({
                            scaledIngredients: this.convertIngredients()
                        }, () => {
                            this.calculateNutrition()
                        })
                    });
                }

                const pendingTags = !!tags && tags.filter((id) => !tagsReducer[id])
                if (!!pendingTags) {
                    getTags(pendingTags);
                }
            })
        } else {
            this.setState({
                recipeFound: true,
                scaledIngredients: this.convertIngredients()
            }, () => {
                this.calculateNutrition()
            });
        }
    }

    convertIngredients = () => {
        const {
            recipe,
            ingredients: storedIngredients
        } = this.props;

        const ingredients = !!Object.keys(storedIngredients).length && recipe.ingredients.reduce((temp, ingredient) => {
            const mergedIngredient = {
                ...ingredient,
                ...storedIngredients[ingredient.id]
            };

            if (mergedIngredient.name) {
                //TODO: eventually convert true to be user preference
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

    calculateNutrition = () => {
        const { scaledIngredients } = this.state;
        const { recipe, ingredients } = this.props;

        if (!!Object.keys(scaledIngredients).length && !!recipe) {
            const nutrition = recipe.ingredients.map(ingred => {
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

            this.setState({
                nutrition
            })
        }

        return;
    }

    render() {
        const {
            tags,
            recipe: {
                name,
                notes,
                images,
                ratings,
                prepTime,
                cookTime,
                uploadedBy,
                directions,
                ingredients,
                tags: recipeTags
            },
            ingredient
        } = this.props;

        const {
            nutrition,
            tagColorArr,
            recipeFound,
            servingSize,
            scaledIngredients
        } = this.state;

        if (this.state.recipeFound === undefined || this.state.recipeFound === false) {
            return null;
        }

        if(!directions || !ingredients) {
            return null;
        }

        return (
            <StyledRecipe className="Recipe">
                <Column>
                    <RecipeHeader
                        name={name}
                        ratings={ratings}
                        uploader={{
                            tag: uploadedBy,
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

                    {directions &&
                        <RecipeSection
                            listType="ol"
                            sectionTitle="Directions">
                            <React.Fragment>
                                {directions.map((step, i) =>
                                    <li key={`Step-${i}`}>{step}</li>
                                )}
                            </React.Fragment>
                        </RecipeSection>
                    }

                    {notes &&
                        <RecipeSection
                            listType="ul"
                            sectionTitle="Chef's Notes">
                            {Array.isArray(notes) ? notes.map((note, index) =>
                                <li key={`notes-${index}`}>{note}</li>
                            ) : (
                                <li>{notes}</li>
                            )}
                        </RecipeSection>
                    }
                </Column>


                <Column>
                    <div
                        className="Recipe--Image"
                        style={{backgroundImage: `url(${images.full})`}}
                    />
                    <Timing
                        prepTime={prepTime}
                        cookTime={cookTime}
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

                    {recipeTags &&
                        <div className="Recipe--Tags">
                            <h3 className="Recipe--Section--Title">Tags</h3>
                            {!!objectPath.get(recipeTags) && recipeTags.map((tagId,index) =>
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
                    }
                </Column>
            </StyledRecipe>
        );
    }
}

const mapStateToProps = ({recipes, user, ingredients, tags}, props) => ({
    recipes,
    ingredients,
    tags: tags.tags,
    network: user.network,
    seedString: user.uid || '',
    recipe: recipes[props.recipeSlug] || {}
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
