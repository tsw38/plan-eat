import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends React.Component {
	render() {
		const {
            children,
            className,
            handleClick
		} = this.props;

		return (
			<button
                onClick={handleClick}
                className={classNames(
                    {'Button': !(/header/gi).test(className)},
                    className
                )}
                >
				{children}
			</button>
		)
	}
}

Button.propTypes = {
    className: PropTypes.string,
    handleClick: PropTypes.func,
    children: PropTypes.any
}

export default Button;
