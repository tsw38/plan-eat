import React from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';

import {toTitleCase} from 'utils/string';

import {FormWrapper} from 'styles/components/Form/Form';

export default class FormGeneric extends React.Component {

    handleSubmit = (formValues, formActions) => {
        const {
            beforeSubmit,
            onSubmit
        } = this.props;

        if (beforeSubmit) {
            return new Promise((resolve,reject) => {
                resolve(beforeSubmit());
            }).then(() => onSubmit(formValues));
        }

        return new Promise((resolve, reject) => {
            resolve(onSubmit(formValues));
        });
    }

    render() {
        const {
            title,
            render,
            onError,
            onSubmit,
            children,
            validators,
            onComplete,
            beforeSubmit,
            initialValues
        } = this.props;

        return (
            <FormWrapper className={classNames(
                'Form',
                `Form--${toTitleCase(title)}`)}>
                <h1 className="Form--Title">{title}</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validators}
                    onSubmit={this.handleSubmit}>
                    {({dirty, errors, handleBlur, handleChange, handleReset, handleSubmit, isSubmitting, isValid, isValidating, values}) => {
                        return (
                            <Form>
                                {children}
                            </Form>
                        )
                    }}
                </Formik>
            </FormWrapper>
        )
    }
};