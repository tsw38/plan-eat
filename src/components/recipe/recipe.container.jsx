import React from "react";

import Component from 'components/recipe/recipe.view';
import Connector from 'components/recipe/recipe.connector';

export default ({location, recipeSlug, ...rest}) => {
    return (
		<Connector
			location={location}
			recipeSlug={recipeSlug}>
            <Component />
        </Connector>
    );
}