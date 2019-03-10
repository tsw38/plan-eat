import React from 'react';
import {Field} from 'formik';
import classNames from 'classnames';

import {toTitleCase} from 'utils/string';

import Alert from 'common/Alert/Alert';

import {AlertConstants as AC} from 'constants';

export default class Input extends React.Component {
    render() {
        const {
            type,
            label,
            name
        } = this.props;

        return (
            <div className={classNames(
                'Input',
                `Input--${toTitleCase(type)}`
            )}>
                <label>
                    <span className={'Input--Label'}>{label}</span>
                    <Field name={name} type={type} placeholder={label} />
                </label>
                <Alert
                    type={AC.ERROR}
                    formError={name}
                />
            </div>
        )
    }
};