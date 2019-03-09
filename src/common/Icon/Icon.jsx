import React from "react";
import classNames from 'classnames';
import { ReactSvgInjector, Mutate } from "react-svg-injector";
import PropTypes from 'prop-types';
import {amour} from 'styles/colors';

import {IconChildrenStyles} from 'styles/common/Icon';

class Icon extends React.Component {
	render() {
		const {
            name,
            className,
            children
        } = this.props;

		return (
            <React.Fragment>
                <div className={classNames(
                    'Icon--Wrapper',
                    className
                )}>
                    <ReactSvgInjector
                        src={`/icons/${name}.svg`}
                        className={classNames(
                        'Icon',
                        `Icon--${name}`,
                        className
                    )}>
                        <Mutate selector="g" fill={amour} />
                    </ReactSvgInjector>
                </div>
                {(/hidden/).test(className) &&
                    <IconChildrenStyles>
                        { children }
                    </IconChildrenStyles>
                }
            </React.Fragment>
		)
	}
}

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.element
}

export default Icon;
