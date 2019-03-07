import styled, { createGlobalStyle } from 'styled-components';
import {transparentize} from 'polished';
import Modal from 'react-modal';

import {elevate} from 'styles/mixins/index';
import * as colors from 'styles/colors';
import * as spacing from 'styles/sizing';

export const StyledModal = styled(Modal)`
	&.Modal {
		position: absolute;
		top: 50%;
		left: 50%;
		bottom: auto;
		right: auto;
		margin-right: -50%;
		transform: translate(-50%, -50%);
		background-color: white;
		padding: ${spacing.spacing2xl} ${spacing.spacing3xl} 0;
		max-width: 50%;
		max-height: 80%;
		${elevate('Modal')}

		&--Primary {
			border-top: ${spacing.spacing2xs} solid ${colors.blueFrance};
		}

		&--Danger {
			border-top: ${spacing.spacing2xs} solid ${colors.amour};
		}

		&--Passive {

		}

		&--Form {
			form {
				box-shadow: none;
			}

			.Form--Footer {
				display: grid;
				grid-template-columns: auto auto;
				grid-gap: 1rem;
				justify-content: flex-end;
				position: absolute;
				margin-left: -3rem;
				margin-right: -3rem;
				padding: 1.5rem 3rem;
				background-color: ${colors.blackSqueeze};
				width:100%;
				${elevate('Modal')}
			}

			.Modal--Content {
				/* margin-bottom: 0; */
			}
		}
	}

	.Modal--Header {
		margin-bottom: 1.5rem;

		&-Label {
			max-width: 38rem;
			font-size: .75rem;
			letter-spacing: 0;
			color: #152935;
			font-weight: 600;
			text-transform: uppercase;
			margin-bottom: .5rem;
		}

		&-Heading {
			font-size: 1.75rem;
			font-weight: 300;
			color: #5a6872;
			max-width: 38rem;
			line-height: 1.5;
		}

		&-Close {
			position: absolute;
			top: 1rem;
			right: 1rem;
			overflow: hidden;
			cursor: pointer;
			background-color: transparent;
			border: none;
			padding: .25rem .25rem .125rem;

			:focus {
				outline: 1px solid #3d70b2;
			}

			svg {
				height: 15px;
				width: 15px;
			}
		}
	}

	.Modal--Content {
		overflow-y: auto;
		margin-bottom: 3rem;
		color: #152935;
		font-weight: 400;

		p {
			max-width: 38rem;
			line-height: 1.5;
			padding: 0 0 1rem;
		}
	}
`;

export const GlobalModal = createGlobalStyle`
    .ReactModalPortal {
    }

    .Modal--Overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: ${transparentize(0.40, colors.stormPetrel)};
        ${elevate('Overlay')}
    }
`;