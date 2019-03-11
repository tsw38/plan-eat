import React from 'react';
import classNames from 'classnames';

class Column extends React.Component {
    render() {
        const {
            children,
            className,
            handleClick
        } = this.props;

        return (
            <div className={classNames(
                className,
                'column'
            )}
                onClick={handleClick}>
                {children}
            </div>
        );
    }
}

export default Column;
