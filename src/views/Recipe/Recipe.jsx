import React from "react";
import { StyledRecipe, RecipeHeader, RecipeSection } from 'styles/views/Recipe';

import Row from 'common/Layout/Row';
import Link from "common/Link/Link";
import Column from 'common/Layout/Column';
import Button from "common/Button/Button";

import * as colors from 'styles/colors';

class Recipe extends React.Component {
    render() {
        return (
            <StyledRecipe className="Recipe">
                <Column>
                    <RecipeHeader
                        className="Recipe--Header">
                        <Row>
                            <h1 className="Recipe--Title">
                                Chicken Stuffed Baked Avocados
                            </h1>
                        </Row>
                        <Row>
                            <p className="Recipe--Author">
                                <span className="subtle">Uploaded By:</span>
                                {' '}
                                <Link
                                    to="#destiny0172">
                                    Destiny0172
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
                            <li>4 avocados, halved and pitted</li>
                            <li>2 cooked chicken breasts, shredded</li>
                            <li>4 ounces cream cheese, softened</li>
                            <li>1/4 cup chopped tomatoes</li>
                            <li>1/4 teaspoon salt</li>
                            <li>1/4 teaspoon ground black pepper</li>
                            <li>1 pinch cayenne pepper</li>
                            <li>1/2 cup shredded Parmesan cheese, or more to taste</li>
                            <li>Add additional Ingredients</li>
                        </ul>
                    </RecipeSection>
                    <RecipeSection
                        className="Recipe--Section">
                        <Row>
                            <h3 className="Recipe--Section--Title">Directions</h3>
                        </Row>
                        <ol className="Recipe--Ingredient-List">
                            <li>
                                Preheat oven to 400 degrees F (200 degrees C).
                            </li>
                            <li>
                                Scoop out some of the flesh in the center of each avocado; place into  mixing bowl. Add chicken, cream cheese, tomatoes, salt, pepper, and  cayenne pepper; mix well to combine. Scoop spoonfuls of chicken  mixture into the wells of each avocado; top each with generous amount  of Parmesan cheese. Place avocado halves, face-up, in muffin cups to  stabilize.
                            </li>
                            <li>
                                Bake avocados in preheated oven until cheese is melted, 8 to 10 minutes.
                            </li>
                        </ol>
                    </RecipeSection>

                    <RecipeSection
                        className="Recipe--Section">
                        <Row>
                            <h3 className="Recipe--Section--Title">Chef's Notes</h3>
                        </Row>
                        <ul className="Recipe--Ingredient-List">
                            <li>
                                Bacon ipsum dolor amet pork belly bacon short ribs, ham turkey frankfurter beef drumstick short loin picanha ham hock fatback. Ham hock kielbasa tail, shoulder flank picanha tri-tip beef prosciutto doner kevin. Filet mignon leberkas fatback kielbasa turkey. Drumstick andouille frankfurter brisket cupim spare ribs pastrami kielbasa buffalo ground round.
                            </li>
                        </ul>
                    </RecipeSection>
                </Column>
                <Column>
                    <div
                        className="Recipe--Image"
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1529268127899-36bf4524c254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)'}}
                    />
                    <div className="Recipe--Time">
                        <div className="Recipe--Time--Prep">
                            <h6>Prep Time</h6>
                            <h5>15 minutes</h5>
                        </div>
                        <div className="Recipe--Time--Cook">
                            <h6>Cook Time</h6>
                            <h5>35 minutes</h5>
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
                            colorName={'blueFrance'}>
                            Tag1
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'casandora'}>
                            Tag2
                        </Button>
                        <Button
                            className="Button--Primary Button--Small Tag"
                            editable={false}
                            colorName={'carribean'}>
                            Tag 3
                        </Button>
                    </div>
                </Column>
            </StyledRecipe>
        );
  }
}

export default Recipe;
