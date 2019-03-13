import React from 'react';
import { ErrorMessage } from 'formik';
import classNames from 'classnames';

import {toTitleCase} from 'utils/string';

export default class Alert extends React.Component {
    alertWrapper = (message) => {
        const {
            type
        } = this.props;

        return (
            <p className={classNames(
                'Alert',
                `Alert--${toTitleCase(type)}`
            )}>
                {message}
            </p>
        )
    }

    render() {
        const {
            message,
            formError
        } = this.props;

        if (formError) {
            return (
                <ErrorMessage name={formError}>
                    {error => error && this.alertWrapper(error)}
                </ErrorMessage>
            )
        }

        return this.alertWrapper(message)
    }
};