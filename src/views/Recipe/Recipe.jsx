import React from "react";
import { StyledRecipe, RecipeHeader, RecipeSection } from 'styles/views/Recipe';

import Row from 'common/Layout/Row';
import Link from "common/Link/Link";
import Column from 'common/Layout/Column';
import Button from "common/Button/Button";

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
                            <h3 className="Recipe--SectionTitle">Ingredients</h3>
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
                            <h3 className="Recipe--SectionTitle">Directions</h3>
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
                            <h3 className="Recipe--SectionTitle">Chef's Notes</h3>
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
                    <div className="Recipe--Time"></div>
                    <div className="Recipe--Nutrition"></div>
                </Column>
            </StyledRecipe>
        );
  }
}

export default Recipe;
