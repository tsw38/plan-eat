import React from "react";
import classNames from 'classnames';
import { ReactSvgInjector, Mutate } from "react-svg-injector";

class Icon extends React.Component {
	render() {
		const {
			name
		} = this.props;

		return (
			<ReactSvgInjector
				src={`/icons/${name}.svg`}
				className={classNames(
				'Icon',
				`Icon--${name}`
			)}>
				<Mutate selector="g" fill="#BADA55" />
			</ReactSvgInjector>
		)
	}
}

export default Icon;
