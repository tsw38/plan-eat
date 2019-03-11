import React from 'react';
import classNames from 'classnames';

const FieldSet = ({
    value,
    error,
    touched,
    id,
    label,
    className,
    handleOnChange,
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
            <fieldset
                onChange={handleOnChange || null}
            >
                <legend className="Input--Label">{label}</legend>
                {children}
            </fieldset>
        </div>
    );
};

export default FieldSet;