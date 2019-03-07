import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from "common/Icon/Icon";
import {StyledButton} from 'styles/common/Button';
class Button extends React.Component {
	render() {
		const {
            children,
            onClick,
            iconName,
            className,
            colorName,
            inverted,
            type
        } = this.props;

        return (
            <StyledButton
                colorName={colorName}
                inverted={inverted}
                onClick={onClick}
                type={type}
                className={classNames(
                    {'Button': !(/header/gi).test(className)},
                    {[`Button--${colorName}`]: !!colorName},
                    {[`Button--${colorName}${inverted ? '--Inverted' : ''}`]: !!colorName && !!inverted},
                    className
                )}>
				{children}

                {iconName || ((/Tag/).test(className)) &&
                    <Icon
                        name={iconName || 'times'}
                    />
                }
			</StyledButton>
        );
	}
}

Button.propTypes = {
    type: PropTypes.string,
    iconName: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any
}

export default Button;
