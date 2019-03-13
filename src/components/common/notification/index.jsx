import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {AlertConstants as AC} from 'constants';

import Icon from "components/common/Icon/Icon";

class Notification extends React.Component {
    state = {
        render: true
    };

    handleOnClick = () => {
        this.setState({
            render: false
        })
    }

    getIconName = () => {
        switch (this.props.scale) {
            case AC.WARNING:
                return 'exclamation-triangle'
            case AC.ERROR:
                return 'times-circle';
            case AC.SUCCESS:
                return 'check-circle';
            case AC.INFORMATION:
            default:
                return 'exclamation-circle';
        }
    }

	render() {
        const {
            type,
            scale,
            title,
            subtitle,
            children
        } = this.props;

        return !this.state.render ? null : (
            <div className={classNames(
                'Notification',
                `Notification--${type.toLowerCase()}`,
                `Notification--${scale.toLowerCase()}`
            )}>

                <div className="Notification--Wrapper">
                    <Icon
                        name={this.getIconName()}
                    />

                    <div className="Notification--Header">
                        <h3 className="Notification--Header--Title">{title}</h3>
                        {subtitle &&
                            <span className="Notification--Header-Subtitle">{subtitle}</span>
                        }
                    </div>

                    {children &&
                        <div className="Notification--Body">
                            {children}
                        </div>
                    }
                </div>
                <Icon
                    name="times"
                    handleOnClick={() => this.handleOnClick()}/>
            </div>
        );
	}
}

Notification.defaultProps = {
    type:AC.INLINE,
    scale: AC.INFORMATION
}

Notification.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.element,
    type: PropTypes.oneOf(['INLINE', 'TOAST']),
    scale: PropTypes.oneOf(['INFORMATION', 'ERROR', 'SUCCESS', 'WARNING'])
}

export default Notification;
