import {createGlobalStyle} from 'styled-components';
import {darken,lighten} from 'polished';

import {elevate, transition} from 'styles/mixins/index';
import * as sizing from 'styles/sizing';
import { fontBold, fontLight, fontNormal, border } from 'styles/variables';

import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

export default createGlobalStyle`
	input, select {
		font-size: ${sizing._14px};
		color: ${colors.blueFrance};
		border: none;
	}

	input, select, textarea {
		-webkit-appearance: none;
		border-radius: 0;
		display: block;
		width: 100%;
		height: ${sizing.spacing2xl};
		padding: 0 ${sizing.spacingmd};
		background-color: ${colors.blackSqueeze};
		box-shadow: 0 1px 0 0 ${colors.stormPetrel};
		border: 1px solid transparent;
		border-bottom: 1px solid transparent;
		${transition()}

		:focus {
			outline: none;
			box-shadow: 0 ${sizing.spacing3xs} 0 0 ${colors.blueFrance};
		}
	}
`;

