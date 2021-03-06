import React from "react";
import classNames from 'classnames';
import { ReactSvgInjector, Mutate } from "react-svg-injector";
import PropTypes from 'prop-types';

import {red} from 'styles/colors';
import {IconChildrenStyles} from 'components/common/Icon/icon.styles';

class Icon extends React.Component {
	render() {
		const {
            name,
            handleOnClick,
            children,
            className
        } = this.props;

		return (
            <React.Fragment>
                <div className={classNames(
                    'Icon--Wrapper',
                    className
                )}
                onClick={handleOnClick}>
                    <ReactSvgInjector
                        src={`/icons/${name}.svg`}
                        className={classNames(
                        'Icon',
                        `Icon--${name}`,
                        className
                    )}>
                        <Mutate selector="g" />
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
