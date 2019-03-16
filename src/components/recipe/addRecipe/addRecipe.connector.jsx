import React from "react";
import {connect} from 'react-redux';

import ModalConfig from 'config/ModalsConfig';

import { injectModal } from 'actions/ModalActions';

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

    handleAddIngredient = (inputHelper, index) => {
        this.props.injectModal({
            modalId: ModalConfig.GLOBAL.passive.id,
            content: {
                heading: "Add Ingredient",
                Body: (
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.</p>
                )
            }
        });
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