import React from 'react';
import classNames from 'classnames';

const FieldSet = ({
    id,
    label,
    error,
    value,
    touched,
    children,
    className,
    handleOnChange
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