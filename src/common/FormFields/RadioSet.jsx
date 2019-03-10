import React from 'react';
import classNames from 'classnames';

const RadioButtonGroup = ({
    value,
    error,
    touched,
    id,
    label,
    className,
    children
}) => {
    const classes = classNames(
        "Input",
        {
            "is-success": value || (!error && touched), // handle prefilled or user-filled
            "is-error": !!error && touched
        },
        `Input--Radio`
    );

    return (
        <div className={classes}>
            <fieldset>
                <legend className="Input--Label">{label}</legend>
                {children}
            </fieldset>
        </div>
    );
};

export default RadioButtonGroup;