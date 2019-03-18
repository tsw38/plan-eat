import convert from 'convert-units';
import {RecipeConstants as RC} from 'constants/index';

export const getRecipe = (slug) => (dispatch, getState, api) => {
    dispatch({
        type: RC.RECIPE_PENDING
    })

    return api({
        query: `
            query getRecipe($slug: String!) {
                recipe(slug: $slug) {
                    name
                    slug
                    tags
                    notes
                    prepTime
                    cookTime
                    uploadedBy
                    directions
                    description
                    servingSize
                    source {
                        name
                        url
                    }
                    ratings {
                        id,
                        rating
                    }
                    ingredients {
                        id
                        quantity
                    }
                    images {
                        full
                        thumbnail
                    }
                }
            }
        `,
        variables: {slug}
    }).then(({data}) => {
        const {
            recipe
        } = data.data;

        if(!!recipe.error) {
            dispatch({
                type: RC.RECIPE_ERROR,
                payload: recipe.error
            })
        } else {
            dispatch({
                type: RC.RECIPE_FETCHED,
                payload: recipe
            })
        }

        return recipe;
    })
}

export const getIngredients = (idArr) => (dispatch, getState, api) => {
    dispatch({
        type: RC.INGREDIENTS_PENDING
    })

    return Promise.all(idArr.map((({id}) =>
        api({
            query: `
                query getIngredient($id: ID!) {
                    ingredient(id: $id) {
                        name,
                        unit,
                        id,
                        nutrition {
                            calories,
                            protein,
                            fat,
                            carbs {
                                absolute,
                                dietaryFiber,
                                sugar
                            }
                            sodium
                            cholesterol
                            allergies
                        }
                        category {
                            name,
                            id
                        }
                    }
                }
            `,
            variables: {id}
        })
    ))).then((data) => {
        const ingredients = data && data.reduce((temp, {data}) => ({
            ...temp,
            [data.data.ingredient.id]: data.data.ingredient
        }), {});

        if(!ingredients) {
            dispatch({
                type: RC.INGREDIENTS_ERROR,
                payload: 'no ingredients?'
            })
        } else {
            dispatch({
                type: RC.INGREDIENTS_FETCHED,
                payload: ingredients
            })
        }

        return ingredients;
    })
}

export const addIngredient = ({name, scaleType, measurement, servingSize, grocerSection, ...macros}) => (dispatch, getState, api) => {
    const isMass = (/mass/i).test(scaleType);
    //take the measurement and convert it to metric vol or mass
    // take that number and 100/that number to get the scale amount
    // go through all of the remaining keys and scale them
    // send to api

    let scale, finalCalculations;
    try {
        scale = measurement && servingSize && (100/convert(Number(servingSize))
            .from(measurement)
            .to(isMass ? 'g' : 'ml'));

        // if (macros['calories']*scale === 0 || isNaN(scale)) {
        //     throw new Error('Too Low Go Higher');
        // }

        finalCalculations = Object.keys(macros).reduce((calculation, macro) => {
            const scaled = macros[macro]*scale || 0;

            calculation[macro] = scaled;

            return calculation;
        }, {})

        finalCalculations.unit = isMass;
    } catch ({message}) {
        dispatch({
            type: RC.ADDING_INGREDIENT_ERROR,
            payload: message
        })
    }


    const recalculated = finalCalculations && {
        name,
        unit: isMass,
        nutrition: {
            calories: finalCalculations.calories,
            fat: finalCalculations.fat,
            cholesterol: finalCalculations.cholesterol,
            sodium: finalCalculations.sodium,
            carbs: {
                absolute: finalCalculations.carbs,
                dietaryFiber: finalCalculations.dietaryFiber,
                sugar: finalCalculations.sugar
            },
            protein: finalCalculations.protein,
            // allergies: [], //TODO: ALLERGIES
        },
        category: grocerSection
    }

    return api({
        query: `
            mutation addIngredient(
                $name: String!,
                $unit: Boolean!,
                $nutrition: InputExpandedNutrition!
                $category: String!
            ) {
            addIngredient(
                nutrition: $nutrition,
                name: $name,
                unit: $unit
                category: $category
            ) {
                id
            }
        }`,
        variables: recalculated
    }).then(({data}) => {
        const {
            addIngredient
        } = data.data;

        if(!!addIngredient.error) {
            // dispatch({
            //     type: RC.RECIPE_ERROR,
            //     payload: recipe.error
            // })
        } else {
            dispatch({
                type: RC.ADDING_INGREDIENT_FETCHED,
                payload: {
                    [addIngredient.id]: recalculated
                }
            })
        }

        return addIngredient;
    })
}




export const getTags = (idArr) => (dispatch, getState, api) => {
    dispatch({
        type: RC.TAGS_PENDING
    })

    return Promise.all(idArr.map(((id) =>
        api({
            query: `
                query getTag($id: ID!) {
                    tag(id: $id) {
                        id,
                        name
                    }
                }
            `,
            variables: {id}
        })
    ))).then((data) => {
        const tags = data && data.map(({data}) => data.data.tag).reduce((totalTags, tag) => ({
            ...totalTags,
            [tag.id]: tag.name
        }), {});

        if(!!tags && Object.keys(tags).length) {
            dispatch({
                type: RC.TAGS_FETCHED,
                payload: tags
            })
        } else {
            dispatch({
                type: RC.TAGS_ERROR,
                payload: 'no tags?'
            })
        }

        return tags;
    })
}



export const getGrocerSection = () => (dispatch, getState, api) => {
    dispatch({
        type: RC.TAGS_PENDING
    })

    return api({
        query: `
            query getTags {
                tags(isGrocerSection: true) {
                    id,
                    name,
                    isGrocerSection
                }

            }
        `,
    }).then(({data}) => {
        if(!data.data.tags.length) {
            dispatch({
                type: RC.TAGS_ERROR,
                payload: 'no tags?'
            })
        } else {
            dispatch({
                type: RC.TAGS_FETCHED,
                payload: data.data.tags
            })
        }

        return data.data.tags;
    })
}