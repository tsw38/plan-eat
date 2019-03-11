import React from 'react';
import {Field} from 'formik';
import classNames from 'classnames';

import {toTitleCase} from 'utils/string';

import Alert from 'common/Alert/Alert';

import {AlertConstants as AC} from 'constants';

export default class Input extends React.Component {
    inputType = () => this.props.type || 'text';

    isRadioButton = () => (/radio/).test(this.inputType());

    renderInput = () => {

        const {
            field: { name, onChange, onBlur },
            id,
            type,
            label,
            className,
            form,
            ...props
        } = this.props;
        return (
            <React.Fragment>
                <input
                    id={id}
                    value={id} // could be something else for output?
                    name={name}
                    onBlur={onBlur}
                    type={this.inputType()}
                    onChange={onChange}
                    className={className}
                    {...props}
                    placeholder={props.placeholder || label}
                />
                {this.isRadioButton() &&
                    <span className="Radio--Button"></span>
                }
            </React.Fragment>

        )
    }
    render() {
        const {
            field: { name },
            type,
            label
        } = this.props;


        return (
            <div className={classNames(
                'Input',
                `Input--${toTitleCase(this.inputType())}`
            )}>
                <label>
                    {this.isRadioButton() ? (
                        <React.Fragment>
                            {this.renderInput()}
                            <span className={'Input--Label'}>{label}</span>
                        </React.Fragment>
                    ): (
                        <React.Fragment>
                            <span className={'Input--Label'}>{label}</span>
                            {this.renderInput()}
                        </React.Fragment>
                    )}
                </label>
                <Alert
                    type={AC.ERROR}
                    formError={name}
                />
            </div>
        )
    }
};