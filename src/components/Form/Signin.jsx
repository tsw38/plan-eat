import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {SigninValidator} from 'utils/validators';

import { Signin } from 'actions/AccountActions';
import { toggleModal } from 'actions/ModalActions';

import Button from 'common/Button/Button';
import Input from 'common/FormFields/Input';
import FormGeneric from 'components/Form/FormGeneric';

class SigninForm extends React.Component {
    render() {
        const {
            user,
            render,
            Signin,
            toggleModal
        } = this.props;

        return (
            <FormGeneric
                id={'signin'}
                title={render.title && 'Sign In'}
                validators={SigninValidator}
                onError={() => {console.warn('on error')}}
                onSubmit={Signin}
                onComplete={() => {console.warn('on complete')}}
                render={{
                    ...render,
                    error: user.error,
                    buttons: (
                        <div className="ButtonWrapper">
                            <Button
                                type="button"
                                onClick={() => toggleModal(render.modal)}
                                className="Button--Secondary">
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="Button--Primary">
                                Sign In
                            </Button>
                        </div>
                    )
                }}
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
    user: PropTypes.object,
    Signin: PropTypes.func,
    render: PropTypes.object,
    toggleModal: PropTypes.func
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.account
    }
}

const mapDispatchToProps = {
    Signin,
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);