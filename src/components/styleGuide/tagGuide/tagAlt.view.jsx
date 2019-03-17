import React from "react";
import classNames from 'classnames';

import Row from 'components/common/Layout/Row';

import {Section} from 'styles/components/Section';
import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

const TagsGuide = () => {
	return (
        <React.Fragment>
            <Section>
                <Row>
                    <h2>Light</h2>
                    {Object.keys(colors).map((color, index) =>
                        <div key={index} className={classNames(
                            'Tag',
                            `Tag--${color}`
                        )}>
                            .Tag.Tag--{color}
                        </div>
                    )}
                </Row>
            </Section>

            <Section>
                <Row>
                    <h2>Dark</h2>
                    {Object.keys(colors).map((color, index) =>
                        <div key={index} className={classNames(
                            'Tag',
                            `Tag--${color}--dark`
                        )}>
                            .Tag.Tag--{color}--dark
                        </div>
                    )}
                </Row>
            </Section>
        </React.Fragment>
	);
}

export default TagsGuide;
