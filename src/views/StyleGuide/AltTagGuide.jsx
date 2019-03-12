import React from "react";
import classNames from 'classnames';

import Row from 'components/common/Layout/Row';

import {Section} from 'styles/components/Section';

import * as colors from 'styles/colors';

const TagsGuide = () => {
	return (
		<Section>
			<Row>
                <h2>Light</h2>
                {Object.keys(colors).map((color, index) =>
					<div key={index} className={classNames(
                        'Tag',
                        `Tag--${color}`
                    )}>
						Tag Tag-{color}
					</div>
				)}
			</Row>

            <Row>
                <h2>Dark</h2>
                {Object.keys(colors).map((color, index) =>
                    <div key={index} className={classNames(
                        'Tag',
                        `Tag--${color}--dark`
                    )}>
                        Tag Tag-{color}--dark
                    </div>
                )}
            </Row>
		</Section>

	);
}

export default TagsGuide;
