import React from 'react';
import { ErrorMessage } from 'formik';
import classNames from 'classnames';

import {toTitleCase} from 'utils/string';

import {AlertStyling} from 'styles/common/alert';
export default class Alert extends React.Component {
    alertWrapper = (message) => {
        const {
            type
        } = this.props;

        return (
            <AlertStyling className={classNames(
                'Alert',
                `Alert--${toTitleCase(type)}`
            )}>
                {message}
            </AlertStyling>
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