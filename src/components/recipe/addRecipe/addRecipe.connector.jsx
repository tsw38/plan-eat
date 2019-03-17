import React from "react";
import {connect} from 'react-redux';

import ModalConfig from 'config/ModalsConfig';

import { injectModal, toggleModal } from 'actions/ModalActions';
import AddIngredient from 'components/recipe/addRecipe/ingredient';

class Connector extends React.Component {
    state = {
        file: {},
        imagePreviewUrl: ""
    }

    handleImageUpload = (e, fieldSetter, fieldName) => {
        const fileReader = new FileReader();
        let file = e.target.files[0];

        fileReader.onload = (e) => {
            this.setState({
                file: file,
                imagePreviewUrl: fileReader.result
            });
            fieldSetter(fieldName, file, false);
        }

        return fileReader.readAsDataURL(file);
    }

    handleSubmit = (values) => {
        console.warn('add recipe values',values);
        return;
    }

    handleAddIngredient = (inputHelper, index) => {
        this.props.injectModal({
            modalId: ModalConfig.GLOBAL.transactional.id,
            content: {
                heading: "Add Ingredient",
                Body: <AddIngredient
                    handleInputUpdate={(props) => {
                        this.setState({
                            ingredient: props
                        })
                    }}
                />,
                buttons: {
                    Primary: {
                        text: "Primary Button",
                        onClick: () => {
                            try {
                                //TODO: insert object to all inputs appropriately
                                inputHelper.insert(index, this.state.ingredient.input)
                                //TODO: close this modal
                                this.props.toggleModal(ModalConfig.GLOBAL.transactional.id);
                            } catch (e) {
                                console.warn('this is the problem', e);
                                inputHelper.push('awd');
                            }
                        }
                    },
                    Secondary: {
                        text: "Primary Button",
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

    render() {
        const {
            children: propChildren,
            ...props
        } = this.props;

        const children = React.Children.map(propChildren, child => {
            return React.cloneElement(child, {
                ...props,
                ...this.state,
                handleSubmit: this.handleSubmit,
                handleImageUpload: this.handleImageUpload,
                handleAddIngredient: this.handleAddIngredient,
                handleAddToInputArray: this.handleAddToInputArray
            });
        });

        return children || null;
    }
}

const mapStateToProps = ({app}, ownProps) => ({
});

const mapDispatchToProps = {
    injectModal,
    toggleModal
};

Connector.defaultProps = {
    name: 'Add Recipe',
    render: {

    }

};

Connector.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);