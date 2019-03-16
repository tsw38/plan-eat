import React from "react";

import Component from 'components/recipe/addRecipe/ingredient/ingredient';
import Connector from 'components/recipe/addRecipe/ingredient/ingredient.connector';

export default (props) => {
    console.warn('container props', props);
    return (
        <Connector
            {...props}>
            <Component />
        </Connector>
    );
}