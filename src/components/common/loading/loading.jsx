import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {StateConstants as SC} from 'constants';

import Icon from "components/common/Icon/Icon";

import {stateChange} from 'utils/object';


class Loading extends React.Component {
    state = {
        render: null
    };

    componentDidMount() {
        this.setState({
            render: this.props.type !== 'full'
        })
    }

    componentDidUpdate(prevProps) {
        const render = stateChange(prevProps.render, this.props.render);
        console.warn('componentDidUpdate', this.props, render);
        if (render.defined && render.changed) {
            this.setState({
                render: this.props.render
            })
        }
    }

	render() {
        const {
            type,
            title,
            state
        } = this.props;

        if (!this.state.render || (this.props.hasOwnProperty('render') && !this.state.render)) {
            return null;
        }

        return (
            <div className={classNames(
                'Loading',
                {[`Loading--${type.toLowerCase()}`]: !!type},
                `Loading--${state.toLowerCase()}`,
                {[`Loading--${type}--render`]: !!this.props.render}
            )}>
                <Icon
                    className="Loading--Icon"
                    name={'circle-notch'}
                />
                {title &&
                    <span>{title}</span>
                }
            </div>
        );
	}
}

Loading.defaultProps = {
    type: 'inline',
    state: SC.LOADING
}

Loading.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    state: PropTypes.oneOf([SC.SUCCESS, SC.LOADING])
}

export default Loading;
