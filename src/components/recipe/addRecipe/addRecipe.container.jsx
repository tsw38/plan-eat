import React from "react";

import Component from 'components/recipe/addRecipe/addRecipe.view';
import Connector from 'components/recipe/addRecipe/addRecipe.connector';

export default ({location}) => {
    return (
        <Connector location={location}>
            <Component />
        </Connector>
    );
}