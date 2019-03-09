import React from "react";

import Row from 'common/Layout/Row';
import Button from "common/Button/Button";
import {Section} from 'styles/components/Section';

import * as colors from 'styles/colors';

const Buttons = () => {
	return (
		<Section>
			<h1>Tags</h1>
			<Row>
				<h2>Full Color</h2>

				{Object.keys(colors).map((color, index) =>
					<Button key={index} className="Button--Primary Button--Small Tag" colorName={color}>
						.Button--Primary.Button--Small.Tag.{color}
					</Button>
				)}
			</Row>

			<Row>
				<h2>Inverted</h2>

				{Object.keys(colors).map((color, index) =>
					<Button key={index} className="Button--Primary Button--Small Tag" colorName={color} inverted={true}>
						.Button--Primary.Button--Small.Tag.{color}--Inverted
					</Button>
				)}
			</Row>

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

	);
}

export default Buttons;
