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