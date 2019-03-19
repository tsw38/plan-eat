import React from "react";
import classNames from 'classnames';
import objectPath from 'object-path';

import Link from "components/common/Link/Link";
import Column from 'components/common/Layout/Column';
import ServingSize from 'components/recipe/servingSize';
import NotFound from 'components/notFound/notFound.view';
import Timing from 'components/recipe/time/time.container';
import RecipeHeader from 'components/recipe/header/header.container';
import RecipeSection from 'components/recipe/section/section.container';

import { StyledRecipe } from 'components/recipe/recipe.styles';

const RecipeView = ({
    error,
    recipe,
    servings,
    nutrition,
    tagsStore,
    tagColorArr,
    increaseServingSize,
    decreaseServingSize,
    recalculatedIngredients
}) => {
    const {
        name,
        slug,
        tags,
        notes,
        images,
        source,
        ratings,
        cookTime,
        prepTime,
        directions,
        uploadedBy,
        description,
        ingredients,
        servingSize
    } = recipe;

    if (error === 400) {
        return (
            <NotFound />
        );
    }

    return (
        <StyledRecipe className="Recipe">
            <Column>
                <RecipeHeader
                    name={name}
                    ratings={ratings && ratings}
                    uploader={{
                        tag: uploadedBy || '',
                        url: "it-dont-matter"
                    }}
                />

                {recalculatedIngredients &&
                    <RecipeSection
                        listType="ul"
                        sectionTitle="Ingredients"
                        firstSectionChild={(
                            <ServingSize
                                onIncrease={increaseServingSize}
                                onDecrease={decreaseServingSize}
                                servingSize={servings}
                            />
                        )}>
                        <React.Fragment>
                            {recalculatedIngredients.map((ingredient, index) =>
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
                    style={{backgroundImage: `url(${objectPath.get(images, 'full')})`}}
                />
                <Timing
                    prepTime={prepTime}
                    cookTime={cookTime}
                />

                {nutrition &&
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
                }

                {tagsStore && tags &&
                    <div className="Recipe--Tags">
                        <h3 className="Recipe--Section--Title">Tags</h3>
                        {!!objectPath.get(tags) && tags.map((tagId,index) =>
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
                                {tagsStore[tagId]}
                            </Link>
                        )}
                    </div>
                }
            </Column>

        </StyledRecipe>
    );
}

export default RecipeView;


{/*

            <Column>



            </Column> */}