import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {SigninValidator} from 'utils/validators';

import { Signin } from 'actions/AccountActions';

import Button from 'common/Button/Button';
import Input from 'common/FormFields/Input';
import FormGeneric from 'components/Form/FormGeneric';

class SigninForm extends React.Component {
    render() {
        const {
            render,
            Signin
        } = this.props;

        return (
            <FormGeneric
                id={'signin'}
                title={render.title && 'Sign In'}
                validators={SigninValidator}
                onError={() => {console.warn('on error')}}
                onSubmit={Signin}
                onComplete={() => {console.warn('on complete')}}
                render={render}
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

SigninForm.defaultProps = {
    render: {
        title: true
    }
}

SigninForm.propTypes = {
    render: PropTypes.object,
    Signin: PropTypes.func
}


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