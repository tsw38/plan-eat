import React from "react";
import classNames from 'classnames';

import ReactSVG from 'react-svg'

class CarbonSVG extends React.Component {
  render() {
	  const {
		  type,
		  className
	  } = this.props;

	  const isCarbon = (/carbon/i).test(type);

    return (
		<ReactSVG
			src={`/images/${className}.svg`}
			evalScripts="always"
			fallback={() => <span>Error!</span>}
			loading={() => <span>Loading</span>}
			onInjected={(error, svg) => {
				if (error) {
				console.error(error)
				return
				}
				console.log(svg)
			}}
			renumerateIRIElements={false}
			svgClassName={classNames(
				'SVG',
				{
					'Carbon': isCarbon,
					[`Carbon--${className}`]: isCarbon,
					className: !isCarbon
				}
			)}
			wrapper="span"
			onClick={() => {
				console.log('wrapper onClick')
			}}
		/>
    );
  }
}

export default CarbonSVG;
