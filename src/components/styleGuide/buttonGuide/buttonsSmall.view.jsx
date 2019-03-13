import React from "react";

import Row from 'components/common/Layout/Row';
import Button from 'components/common/button';
import {Section} from 'styles/components/Section';

const Buttons = () => {
	return (
		<Section>
			<Row>
				<h2>Primary</h2>

				<Button className="Button--Primary Button--Small">
					.Button--Primary.Button--Small
				</Button>

				<Button className="Button--Disabled Button--Primary Button--Small">
					.Button--Disabled.Button--Primary.Button--Small
				</Button>
			</Row>
			<Row>
				<h2>Secondary</h2>
				<Button className="Button--Secondary Button--Small">
					.Button--Secondary.Button--Small
				</Button>

				<Button className="Button--Disabled Button--Secondary Button--Small">
					.Button--Disabled.Button--Secondary.Button--Small
				</Button>
			</Row>
			<Row>
				<h2>Teritary</h2>

				<Button className="Button--Tertiary--Full Button--Small">
					.Button--Tertiary--Full.Button--Small
				</Button>

				<Button className="Button--Tertiary Button--Small">
					.Button--Tertiary.Button--Small
				</Button>

				<Button className="Button--Disabled Button--Tertiary--Full Button--Small">
					.Button--Disabled.Button--Tertiary--Full.Button--Small
				</Button>

				<Button className="Button--Disabled Button--Tertiary Button--Small">
					.Button--Disabled.Button--Tertiary--Full.Button--Small
				</Button>
			</Row>
			<Row>
				<h2>Danger</h2>

				<Button className="Button--Primary--Danger Button--Small">
					.Button--Primary--Danger.Button--Small
				</Button>

				<Button className="Button--Secondary--Danger Button--Small">
					.Button--Secondary--Danger.Button--Small
				</Button>

				<Button className="Button--Disabled Button--Primary--Danger Button--Small">
					.Button--Disabled.Button--Primary--Danger.Button--Small
				</Button>

				<Button className="Button--Disabled Button--Secondary--Danger Button--Small">
					.Button--Disabled.Button--Secondary--Danger.Button--Small
				</Button>
			</Row>
		</Section>
	);
}

export default Buttons;