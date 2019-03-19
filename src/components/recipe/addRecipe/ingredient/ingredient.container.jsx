import React from "react";

import Component from 'components/recipe/addRecipe/ingredient/ingredient.component';
import Connector from 'components/recipe/addRecipe/ingredient/ingredient.connector';

export default (props) => {
    return (
        <Connector
            {...props}>
            <Component />
        </Connector>
    );
}