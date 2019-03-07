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
                <SigninForm />
                <Modal
                    modalId={1}
                    type="Primary"
                    label="Optional Label"
                    heading="Modal Heading">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.</p>
                </Modal>
            </StyledSignin>
        );
    }
}

export default Signin;
