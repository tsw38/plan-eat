import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {connect} from 'react-redux';
import { suitify } from 'utils/string';

import {AlertConstants as AC} from 'constants';

import { popToast } from 'actions/ToastActions';

import Icon from "components/common/Icon/Icon";

class Notification extends React.Component {
    state = {
        render: true
    };

    componentDidMount() {
        if ((/TOAST/).test(this.props.type) && !this.props.disableTimeout) {
            setTimeout(() => {
                this.props.popToast();
            }, 5000);
        }
    }

    handleOnClick = () => {

        //TODO: TOAST - on click, send index to remove from queue
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
            theme,
            subtitle,
            children
        } = this.props;

        return !this.state.render ? null : (
            <div className={classNames(
                suitify({
                    parent: 'Notification',
                    variant: [type.toLowerCase(), !!scale && scale.toLowerCase(), !!theme && theme.toLowerCase()]
                })
            )}>

                <div className="Notification--Wrapper">
                    <Icon
                        className="Notification--Icon"
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

                    <Icon
                        className={classNames(
                            'Notification--Icon',
                            'Notification--Icon--Close'
                        )}
                        name="times"
                        handleOnClick={() => this.handleOnClick()}/>
                </div>

            </div>
        );
	}
}

Notification.defaultProps = {
    theme: '',
    type:AC.INLINE,
    scale: AC.INFORMATION
}

Notification.propTypes = {
    title: PropTypes.string,
    theme: PropTypes.oneOf(["dark", "Dark", "DARK", ""]),
    subtitle: PropTypes.string,
    children: PropTypes.element,
    type: PropTypes.oneOf(['INLINE', 'TOAST']),
    scale: PropTypes.oneOf(['INFORMATION', 'ERROR', 'SUCCESS', 'WARNING'])
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
    popToast
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);