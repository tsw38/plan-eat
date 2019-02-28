import styled from 'styled-components';
import { Link as ReachLink } from "@reach/router";

import {transition} from '../mixins/index';

import {azureRadiance, malibu} from '../colors';

export const Link = styled(ReachLink)`
	font-size: 0.875rem;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 600;
	text-decoration: underline;
	color: ${azureRadiance};
	${transition()}

	&:hover {
		color: ${malibu};
	}
`;

