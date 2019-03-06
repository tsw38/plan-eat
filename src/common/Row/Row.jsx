import React from 'react';
import classNames from 'classnames';

class Row extends React.Component {
    render() {
        const {
            children,
            className
        } = this.props;

        return (
            <div className={classNames(
                className,
                'row'
            )}>
                {children}
            </div>
        );
    }
}

export default Row;
