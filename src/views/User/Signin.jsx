import React from "react";
import SigninForm from 'components/Form/Signin';

import { StyledSignin } from 'styles/views/Signin';


import Modal from 'common/Modal/ModalGeneric';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class Signin extends React.Component {
    render() {
        return (
            <StyledSignin>
                <Modal
                    modalId={1}
                    type="Primary"
                    heading="Sign In">
                    <SigninForm
                        render={{
                            title: false,
                            inModal: true
                        }}/>
                </Modal>
            </StyledSignin>
        );
    }
}

export default Signin;
