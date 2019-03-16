import React from "react";
import {connect} from 'react-redux';

import ModalConfig from 'config/ModalsConfig';

import { injectModal } from 'actions/ModalActions';
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
            modalId: ModalConfig.GLOBAL.passive.id,
            content: {
                heading: "Add Ingredient",
                Body: <AddIngredient />
            }
        });
        try {
            inputHelper.insert(index, '')
        } catch (e) {
            console.warn('this is the problem', e);
            inputHelper.push('');
        }
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
                handleAddIngredient: this.handleAddIngredient
            });
        });

        return children || null;
    }
}

const mapStateToProps = ({app}, ownProps) => ({
});

const mapDispatchToProps = {
    injectModal
};

Connector.defaultProps = {
    name: 'Add Recipe',
    render: {

    }

};

Connector.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);