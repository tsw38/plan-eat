import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { navigate } from "@reach/router";
import objectPath from 'object-path';

import {stateChange} from 'utils/object';

import AddIngredientForm from 'components/common/Form/AddIngredient';

import { StyledSignin } from 'styles/views/Signin';

import Modal from 'components/common/modal';

import Config from 'config/ModalsConfig';

class Signin extends React.Component {
    state = {
        render: false
    }

    componentDidMount() {
        this.setState({
            render: true
        })
    }

    componentDidUpdate(prevProps) {
    }


    render() {
        const {
            render
        } = this.state;

        const {
            modal
        } = this.props;

        return render && (
            <StyledSignin>
                <Modal
                    modalId={Config.ADD_INGREDIENT_MODAL.id}
                    isOpen={modal.isOpen}
                    render={{
                        form: true
                    }}
                    type={Config.types.transactional}
                    heading={Config.ADD_INGREDIENT_MODAL.heading}>
                    <AddIngredientForm
                        render={{
                            title: false,
                            modal: Config.ADD_INGREDIENT_MODAL.id
                        }}/>
                </Modal>
            </StyledSignin>
        );
    }
}

const mapStateToProps = ({modals}, props) => ({
    modal: objectPath.get(modals, Config.ADD_INGREDIENT_MODAL.id)
});

const mapDispatchToProps = {
	// initialize,
	// toggleModal
};

Signin.defaultProps = {
    modal: {}
};

Signin.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
