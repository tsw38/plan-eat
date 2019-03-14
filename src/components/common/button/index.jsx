import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from "components/common/Icon/Icon";
import {StyledButton} from 'components/common/button/button.styles';
class Button extends React.Component {
	render() {
		const {
            type,
            style,
            onClick,
            children,
            iconName,
            editable,
            inverted,
            className,
            colorName
        } = this.props;

        return (
            <StyledButton
                colorName={colorName}
                inverted={inverted}
                onClick={onClick}
                type={type}
                style={style}
                className={classNames(
                    {'Button': !(/header/gi).test(className)},
                    {[`Button--${colorName}`]: !!colorName},
                    {[`Button--${colorName}${inverted ? '--Inverted' : ''}`]: !!colorName && !!inverted},
                    {editable},
                    className
                )}>

				{children}

                {(iconName || (/Tag/).test(className)) && editable &&
                    <Icon
                        name={iconName || 'times'}
                    />
                }
			</StyledButton>
        );
	}
}

Button.defaultProps = {
    editable: true
}

Button.propTypes = {
    type: PropTypes.string,
    iconName: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any
}

export default Button;
