import React from "react";
import SigninForm from 'components/Form/Signin';

import { StyledSignin } from 'styles/views/Signin';

class Signin extends React.Component {
    render() {
        return (
            <StyledSignin>
                <SigninForm />
            </StyledSignin>
        );
    }
}

export default Signin;
