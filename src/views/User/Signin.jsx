import React from "react";
import SigninForm from 'components/Form/Signin';

import { StyledSignin } from 'styles/views/Signin';

import Modal from 'common/Modal/ModalGeneric';

import Config from 'config/ModalsConfig';

class Signin extends React.Component {
    render() {
        return (
            <StyledSignin>
                <Modal
                    modalId={Config.SIGN_IN_MODAL.id}
                    render={{
                        form: true
                    }}
                    type={Config.SIGN_IN_MODAL.type}
                    heading={Config.SIGN_IN_MODAL.heading}>
                    <SigninForm
                        render={{
                            title: false,
                            modal: Config.SIGN_IN_MODAL.id
                        }}/>
                </Modal>
            </StyledSignin>
        );
    }
}

export default Signin;
