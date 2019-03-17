import React from "react";

import View from 'components/addIngredient/addIngredient.view';
import Connector from 'components/addIngredient/addIngredient.connector';

class AddIngredientContainer extends React.Component {
    render() {
        return (
            <Connector>
                <View />
            </Connector>
        );
    }
}

AddIngredientContainer.defaultProps = {
};

AddIngredientContainer.propTypes = {
};

export default AddIngredientContainer;