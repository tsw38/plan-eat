import React from 'react';
import classNames from 'classnames';
import TextareaAutosize from 'react-autosize-textarea'

import {toTitleCase} from 'utils/string';

import Alert from 'components/common/Alert/Alert';

import {AlertConstants as AC} from 'constants';

export default class Input extends React.Component {
    inputType = () => this.props.type || 'text';

    isRadioButton = () => (/radio/).test(this.inputType());

    renderInput = () => {
        const {
            id,
            type,
            label,
            children,
            form,
            ...props
        } = this.props;

        const {
            name,
            onChange,
            onBlur
        } = this.props.field || {};

        let Field;

        switch (this.inputType()){
            case 'select':
                Field = 'select';
                break;
            case 'textarea':
                Field = TextareaAutosize;
                break;
            default:
                Field = 'input';
                break;
        };

        return (
            <React.Fragment>
                <Field
                    id={name}
                    value={id} // could be something else for output?
                    name={name}
                    onBlur={onBlur}
                    type={this.inputType()}
                    onChange={onChange}
                    {...props}
                    placeholder={props.placeholder || label}
                >
                    {children}
                </Field>
                {this.isRadioButton() && (
                    <span className="Radio--Button"></span>
                )}
            </React.Fragment>

        )
    }
    render() {
        const {
            type,
            label,
            children,
            className
        } = this.props;

        const {
            name,
            onBlur,
            onChange
        } = this.props.field || {};


        return (
            <div className={classNames(
                'Input',
                `Input--${toTitleCase(this.inputType())}`,
                className
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