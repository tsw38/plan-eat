import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from "common/Icon/Icon";
import {StyledButton} from 'styles/common/Button';
class Button extends React.Component {
	render() {
		const {
            children,
            handleClick,
            iconName,
            className,
            colorName,
            inverted
        } = this.props;

        return (
            <StyledButton
                colorName={colorName}
                inverted={inverted}
                onClick={handleClick}
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
    iconName: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func,
    children: PropTypes.any
}

export default Button;
