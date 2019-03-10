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