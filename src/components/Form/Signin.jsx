import React from 'react';
import {connect} from 'react-redux';
import {Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

import {SigninValidator} from 'utils/validators';

import { Signin } from 'actions/AccountActions';

import Button from 'common/Button/Button';
import Input from 'common/FormFields/Input';
import FormGeneric from 'components/Form/FormGeneric';

class SigninForm extends React.Component {
    render() {
        const {
            Signin
        } = this.props;

        return (
            <FormGeneric
                title='Signin'
                validators={SigninValidator}
                onError={() => {console.warn('on error')}}
                onSubmit={Signin}
                onComplete={() => {console.warn('on complete')}}
                initialValues={{
                    email: "",
                    password: ""
                }}>
                <React.Fragment>
                    <Input
                        type="email"
                        name="email"
                        label="Email Address"
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Password"
                    />

                    <Button type="submit" className="Button--Primary">Sign In</Button>
                </React.Fragment>
            </FormGeneric>
        )
    }
};


const mapStateToProps = (state, ownProps) => {
    // console.warn('maping state to prop', state)
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    Signin
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);