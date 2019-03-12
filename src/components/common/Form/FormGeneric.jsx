import React from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {AlertConstants as AC} from 'constants';

import {toTitleCase} from 'utils/string';

import Alert from 'components/common/Alert/Alert';
import {FormWrapper} from 'styles/components/common/Form/Form';

class FormGeneric extends React.Component {

    handleSubmit = (formValues, {resetForm}) => {
        const {
            beforeSubmit,
            onSubmit
        } = this.props;

        if (beforeSubmit) {
            beforeSubmit().then(resp => {
                onSubmit(formValues).then(resp2 => {
                    resetForm({})
                })
            })
        } else {
            onSubmit(formValues).then((resp) => resetForm({}));
        }

        return;
    }

    render() {
        const {
            id,
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
                `Form--${toTitleCase(id)}`,
                {[`Form--Modal`]: render.modal}
            )}>
                {title &&
                    <h1 className="Form--Title">{title}</h1>
                }
                <Formik
                    initialValues={initialValues}
                    validationSchema={validators}
                    onSubmit={this.handleSubmit}>
                    {(formManager) => {
                        return (
                            <Form>
                                <div className="Form--FieldsWrapper">
                                    {render.form(formManager)}
                                </div>
                                <div className="Form--Footer">
                                    <Alert
                                        type={AC.ERROR}
                                        message={render.error}
                                    />

                                    {render.buttons}
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </FormWrapper>
        )
    }
};

FormGeneric.defaultProps = {
    render: {

    }
}

FormGeneric.propTypes = {
    id: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}

export default FormGeneric;