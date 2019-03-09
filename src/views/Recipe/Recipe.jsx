import React from "react";
import { StyledRecipe, RecipeHeader, RecipeIngredients } from 'styles/views/Recipe';

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

                    <RecipeIngredients
                        className="Recipe--IngredientsWrapper">
                        <Row>
                            <h3 className="Recipe--Ingredients"></h3>
                            <div className="Recipe--Serving-Toggle">

                            </div>
                        </Row>
                        <Row>
                            <ul className="Recipe--Ingredient-List"></ul>
                        </Row>
                    </RecipeIngredients>
                </Column>
                <Column>
                    <div
                        className="Recipe--Image"
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552057008-518700a52ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80)'}}
                    />
                    <div className="Recipe--Time"></div>
                    <div className="Recipe--Nutrition"></div>
                </Column>
            </StyledRecipe>
        );
  }
}

export default Recipe;
