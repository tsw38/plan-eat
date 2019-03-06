import React from "react";

import Row from 'common/Row/Row';
import Button from "common/Button/Button";
import {Section} from 'styles/components/section';

const Buttons = () => {
	return (
		<Section>
			<h1>Buttons</h1>

			<Row>
				<h2>Primary</h2>
				<Button className="Button--Primary">
					.Button--Primary
				</Button>
				<Button className="Button--Disabled Button--Primary">
					.Button--Disabled.Button--Primary
				</Button>
			</Row>

			<Row>
				<h2>Secondary</h2>

				<Button className="Button--Secondary">
					.Button--Secondary
				</Button>

				<Button className="Button--Disabled Button--Secondary">
					.Button--Disabled.Button--Secondary
				</Button>
			</Row>

			<Row>
				<h2>Tertiary</h2>
				<Button className="Button--Tertiary--Full">
					.Button--Tertiary--Full
				</Button>

				<Button className="Button--Tertiary">
					.Button--Tertiary
				</Button>

				<Button className="Button--Disabled Button--Tertiary--Full">
					.Button--Disabled.Button--Tertiary--Full
				</Button>

				<Button className="Button--Disabled Button--Tertiary">
					.Button--Disabled.Button--Tertiary--Full
				</Button>
			</Row>

			<Row>
				<h2>Danger</h2>

				<Button className="Button--Primary--Danger">
					.Button--Primary--Danger
				</Button>

				<Button className="Button--Secondary--Danger">
					.Button--Secondary--Danger
				</Button>

				<Button className="Button--Disabled Button--Primary--Danger">
					.Button--Disabled.Button--Primary--Danger
				</Button>

				<Button className="Button--Disabled Button--Secondary--Danger">
					.Button--Disabled.Button--Secondary--Danger
				</Button>
			</Row>
		</Section>
	);
}

export default Buttons;
