import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {SigninValidator} from 'utils/validators';

import { signIn } from 'actions/AccountActions';
import { toggleModal } from 'actions/ModalActions';

import Button from 'common/Button/Button';
import Input from 'common/FormFields/Input';
import FormGeneric from 'components/Form/FormGeneric';

class SigninForm extends React.Component {
    render() {
        const {
            user,
            render,
            signIn,
            toggleModal
        } = this.props;

        return (
            <FormGeneric
                id={'signin'}
                title={render.title && 'Sign In'}
                validators={SigninValidator}
                onError={() => {console.warn('on error')}}
                onSubmit={signIn}
                onComplete={() => {console.warn('on complete')}}
                initialValues={{
                    email: "",
                    password: ""
                }}
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
                    ),
                    form: () => {
                        return (
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
                        )
                    }}
                }
            />
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
    signIn: PropTypes.func,
    render: PropTypes.object,
    toggleModal: PropTypes.func
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.account
    }
}

const mapDispatchToProps = {
    signIn,
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);