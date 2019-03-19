
import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten } from 'polished';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

export default createGlobalStyle`
	.bx--list-box {
		background-color: ${monochromes.blackSqueeze};

		&--light {
			background-color: white;
		}
	}
`;