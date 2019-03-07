import React from 'react';

import Input from 'common/FormFields/Input';

import {Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

import Button from "common/Button/Button";

import FormGeneric from 'components/Form/FormGeneric';

import {SigninValidator} from 'utils/validators';

import { Signin } from 'actions/AccountActions';

export default class SigninForm extends React.Component {
    render() {
        return (
            <FormGeneric
                title='Signin'
                validators={SigninValidator}
                onError={() => {console.warn('on error')}}
                onSubmit={Signin}
                onComplete={() => {console.warn('on complete')}}
                beforeSubmit={() => {console.warn('before submit')}}
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