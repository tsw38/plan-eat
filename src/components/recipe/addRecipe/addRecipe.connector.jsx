import React from "react";
import {connect} from 'react-redux';

import ModalConfig from 'config/ModalsConfig';

import { getAllIngredients } from 'actions/RecipeActions';
import { injectModal, toggleModal } from 'actions/ModalActions';
import AddIngredient from 'components/recipe/addRecipe/ingredient';

class Connector extends React.Component {
    state = {
        file: {},
        servingSize: 1,
        imagePreviewUrl: "",
    }

    componentWillMount() {
        this.props.getAllIngredients();
    }

    handleSubmit = (values) => {
        console.warn('add recipe values',values);
        return;
    }

    handleImageUpload = (e, fieldSetter, fieldName) => {
        const fileReader = new FileReader();
        let file = e.target.files[0];

        fileReader.onload = (e) => {
            this.setState({
                file,
                imagePreviewUrl: fileReader.result
            });
            fieldSetter(fieldName, file, false);
        }

        return fileReader.readAsDataURL(file);
    }

    handleAddIngredient = (inputHelper, index) => {
        const {
            injectModal,
            ingredients
        } = this.props;

        injectModal({
            modalId: ModalConfig.GLOBAL.transactional.id,
            content: {
                heading: "Add Ingredient",
                Body: (
                    <AddIngredient
                        handleInputUpdate={(props) => {
                            this.setState({
                                ingredient: props
                            })
                        }}
                        ingredients={ingredients}
                    />
                ),
                buttons: {
                    Primary: {
                        text: "Add Ingredient",
                        onClick: () => {
                            try {
                                //TODO: insert object to all inputs appropriately
                                inputHelper.insert(index, this.state.ingredient.input)
                                //TODO: close this modal
                                this.props.toggleModal(ModalConfig.GLOBAL.transactional.id);
                            } catch (e) {
                                console.warn('this is the problem', e);
                                inputHelper.push(['awd', 'awd']);
                            }
                        }
                    },
                    Secondary: {
                        text: "Cancel",
                        onClick: () => {console.log('Cancel')}
                    },
                }
            }
        });
    }

    handleAddToInputArray = (inputHelper, index) => {
        try {
            inputHelper.insert(index, '')
        } catch (e) {
            console.warn('this is the problem', e);
            inputHelper.push('');
        }
    }

    handleServingSize = (isIncreasing) => {
        const currentSize = this.state.servingSize;

        this.setState({
            servingSize: isIncreasing ? currentSize+1 : (currentSize > 1 ? currentSize-1 : 1)
        })
    }

    render() {
        const {
            children: propChildren,
            ...props
        } = this.props;

        const children = React.Children.map(propChildren, child => {
            return React.cloneElement(child, {
                ...props,
                ...this.state,
                handleError: this.handleError,
                handleSubmit: this.handleSubmit,
                handleComplete: this.handleComplete,
                handleImageUpload: this.handleImageUpload,
                handleAddIngredient: this.handleAddIngredient,
                handleAddToInputArray: this.handleAddToInputArray,
                increaseServingSize: () => this.handleServingSize(true),
                decreaseServingSize: () => this.handleServingSize(false)
            });
        });

        return children || null;
    }
}

const mapStateToProps = ({app, ingredients}, ownProps) => ({
    ingredients
});

const mapDispatchToProps = {
    injectModal,
    toggleModal,
    getAllIngredients
};

Connector.defaultProps = {
    name: 'Add Recipe',
    render: {

    }

};

Connector.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);