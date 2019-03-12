import React from "react";
import classNames from 'classnames';

import Row from 'components/common/Layout/Row';

import {Section} from 'styles/components/Section';

import * as colors from 'styles/colors';

const TagsGuide = () => {
	return (
		<Section>
			<h1>Alt Tags</h1>
			<Row>
				{/* <h2>Full Color</h2> */}

				{Object.keys(colors).map((color, index) =>
					<div key={index} className={classNames(
                        'Tag',
                        `Tag--${color}`
                    )}>
						Tag Tag-{color}
					</div>
				)}
			</Row>

			{/* <Row>
				<h2>Inverted</h2>

				{Object.keys(colors).map((color, index) =>
					<Button key={index} className="Button--Primary Button--Small Tag" colorName={color} inverted={true}>
						.Button--Primary.Button--Small.Tag.{color}--Inverted
					</Button>
				)}
			</Row> */}
		</Section>

	);
}

export default TagsGuide;
