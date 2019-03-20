import React from 'react';
import classNames from 'classnames';

class Row extends React.Component {
    render() {
        const {
            style,
            children,
            className,
            handleClick
        } = this.props;
        return (
            <div
                style={style}
                className={classNames(
                    className,
                    'row'
                )}
                onClick={handleClick}>
                {children}
            </div>
        );
    }
}

export default Row;
