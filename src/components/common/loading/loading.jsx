import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {StateConstants as SC} from 'constants';

import Icon from "components/common/Icon/Icon";

import {stateChange} from 'utils/object';


class TestLoader extends React.Component {
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
				<div className="Loading--Icon">
					<img src="/assets/icons/circle-notch.png" alt="loading icon" />
				</div>
                {title &&
                    <span>{title}</span>
                }
            </div>
        );
	}
}

TestLoader.defaultProps = {
    type: 'inline',
    state: SC.LOADING
}

TestLoader.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    state: PropTypes.oneOf([SC.SUCCESS, SC.LOADING])
}

export default TestLoader;
