import React from 'react';
import {Field} from 'formik';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {SigninValidator} from 'utils/validators';

import { signIn } from 'actions/AccountActions';
import { toggleModal } from 'actions/ModalActions';

import Button from 'components/common/button';
import Input from 'components/common/Form/Fields/Input';
import FormGeneric from 'components/common/Form/FormGeneric';

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
                                <Field
                                    type="email"
                                    name="email"
                                    component={Input}
                                    label="Email Address"
                                />
                                <Field
                                    type="password"
                                    name="password"
                                    component={Input}
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