import React from "react";

import Button from 'components/common/button';
import Row from 'components/common/Layout/Row';

import {Section} from 'styles/components/Section';

import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

const Buttons = () => {
	return (
        <React.Fragment>
            <Section>
                <Row>
                    <h2>Full Color</h2>

                    {Object.keys(colors).map((color, index) =>
                        <Button key={index} className="Button--Primary Button--Small Tag" colorName={color}>
                            .Button--Primary.Button--Small.Tag.{color}
                        </Button>
                    )}
                </Row>
            </Section>
            <Section>
                <Row>
                    <h2>Inverted</h2>

                    {Object.keys(colors).map((color, index) =>
                        <Button key={index} className="Button--Primary Button--Small Tag" colorName={color} inverted={true}>
                            .Button--Primary.Button--Small.Tag.{color}--Inverted
                        </Button>
                    )}
                </Row>
            </Section>
            <Section>
                <Row>
                    <h2>Inverted Alt Hover</h2>
                    <Button className="Button--Secondary Button--Small Tag">
                        .Button--Secondary.Button--Small.Tag
                    </Button>

                    <Button className="Button--Tertiary Button--Small Tag">
                        .Button--Tertiary.Button--Small.Tag
                    </Button>

                    <Button className="Button--Secondary--Danger Button--Small Tag">
                        .Button--Secondary--Danger.Button--Small.Tag
                    </Button>

                    <Button className="Button--Small Tag Tag--Hazard--Inverted">
                        .Button--Small.Tag.Tag--Hazard--Inverted
                    </Button>

                    <Button className="Button--Small Tag Tag--Favorite--Inverted">
                        .Button--Small.Tag.Tag--Favorite--Inverted
                    </Button>

                    <Button className="Button--Small Tag Tag--Royal--Inverted">
                        .Button--Small.Tag.Tag--Royal--Inverted
                    </Button>

                    <Button className="Button--Small Tag Tag--Go--Inverted">
                        .Button--Small.Tag.Tag--Go--Inverted
                    </Button>
                </Row>
            </Section>
        </React.Fragment>
	);
}

export default Buttons;
