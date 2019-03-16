import React from "react";
import {connect} from 'react-redux';

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