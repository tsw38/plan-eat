//module
import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//actions
import { getRecipe, getIngredients, getTags } from 'actions/RecipeActions';

//utilities
import {stateChange} from 'utils/object';
import {generateSeed} from 'utils/array';
import {convertUnit} from 'utils/convert';
import {polychromes} from 'styles/colors';

class Connector extends React.Component {
    state = {
        nutrition: {},
        servingSize: 1,
        tagColorArr: generateSeed(this.props.seedString, Object.keys(polychromes)),
        recalculatedIngredients: [],
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
            tagsStore,
            recipeSlug,
            getIngredients,
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
                            recalculatedIngredients: this.convertIngredients()
                        }, () => {
                            this.calculateNutrition()
                        })
                    });
                }

                const pendingTags = !!tags && tags.filter((id) => !tagsStore[id])
                if (!!pendingTags) {
                    getTags(pendingTags);
                }
            })
        } else {
            this.setState({
                recipeFound: true,
                recalculatedIngredients: this.convertIngredients()
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
        const { recalculatedIngredients } = this.state;
        const { recipe, ingredients } = this.props;

        if (!!Object.keys(recalculatedIngredients).length && !!recipe) {
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
            children: propChildren,
            error,
            ...props
        } = this.props;

        console.warn(this.state);

        const children = React.Children.map(propChildren, child => {
            return React.cloneElement(child, {
				// props
                ...props,
                // state
                error,
				...this.state,
                // functions
                handleGetRecipe: this.handleGetRecipe
            });
        });

        return children || null;
    }
}

const mapStateToProps = ({recipes, user, ingredients, tags}, props) => ({
    recipes,
    ingredients,
    tagsStore: tags.tags,
    error: recipes.error,
    network: user.network,
    seedString: user.uid || '',
    recipe: recipes[props.recipeSlug] || {}
});

const mapDispatchToProps = {
    getTags,
    getRecipe,
    getIngredients
};

Connector.defaultProps = {
    recipe: {},
    tagsStore: {},
    nutrition: {},
    tagColorArr: [],
    servingSize: 1,
    ingredientsStore: {},
    recalculatedIngredients: []
}

Connector.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);