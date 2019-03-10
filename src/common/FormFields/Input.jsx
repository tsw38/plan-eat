import React from 'react';
import {Field} from 'formik';
import classNames from 'classnames';

import {toTitleCase} from 'utils/string';

import Alert from 'common/Alert/Alert';

import {AlertConstants as AC} from 'constants';

export default class Input extends React.Component {
    render() {
        const {
            id,
            name,
            type,
            value,
            label,
            onBlur,
            checked,
            onChange,
            className,
            placeholder,
        } = this.props;

        const isRadioButton = (/radio/).test(type);

        return (
            <div className={classNames(
                'Input',
                `Input--${toTitleCase(type)}`
            )}>
                <label>
                    <span className={'Input--Label'}>{label}</span>
                    <Field
                        {...this.props}
                        id={id}
                        value={id} // could be something else for output?
                        name={name}
                        type={type}
                        placeholder={placeholder || label}
                        {...(!!onBlur && { onBlur })}
                        {...(!!onChange && { onChange })}
                        {...(isRadioButton && {
                            checked: id === value
                        })}
                    />
                </label>
                <Alert
                    type={AC.ERROR}
                    formError={name}
                />
            </div>
        )
    }
};