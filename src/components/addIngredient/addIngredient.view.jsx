import React from "react";

import AddIngredientForm from 'components/common/Form/AddIngredient';

import { StyledSignin } from 'styles/views/Signin';
import GlobalAddIngredient from 'components/addIngredient/addIngredient.styles';

import Modal from 'components/common/modal';

export default ({
    modal,
    Config,
    appLoading
}) => {
    if (appLoading) {
        return null;
    }

    return (
        <StyledSignin>
            <GlobalAddIngredient />
            <Modal
                modalId={Config.ADD_INGREDIENT_MODAL.id}
                isOpen={true}
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