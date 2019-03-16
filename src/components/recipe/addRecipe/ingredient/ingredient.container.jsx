import React from "react";

import Component from 'components/recipe/addRecipe/ingredient/ingredient';
import Connector from 'components/recipe/addRecipe/ingredient/ingredient.connector';

export default ({location}) => {
    return (
        <Connector location={location}>
            <Component />
        </Connector>
    );
}