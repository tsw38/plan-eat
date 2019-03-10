import styled, { createGlobalStyle } from 'styled-components';
import {transparentize} from 'polished';
import Modal from 'react-modal';

import {elevate} from 'styles/mixins/index';
import * as colors from 'styles/colors';
import * as spacing from 'styles/sizing';

import {fontBold, fontLight, fontNormal} from 'styles/variables';

export const StyledModal = styled(Modal)`
	&.Modal {
		/* position: absolute;
		top: 50%;
		left: 50%;
		bottom: auto;
		right: auto;
		margin-right: -50%;
		transform: translate(-50%, -50%); */
        position: relative;
		background-color: white;
		padding: ${spacing.spacing3xl};
		max-width: 700px;
        width: 70vw;
        min-width: 400px;
		max-height: 90vh;
        overflow-y: auto;

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
            padding: 0;

			form {
				box-shadow: none;
			}

			.Form--Footer {
				/* position: absolute;
                bottom: 0;
                left: 0;
                right: 0; */
				width:100%;
                margin: 0;
				display: grid;
				grid-template-columns: auto auto;
				grid-gap: ${spacing.spacingmd};
				justify-content: space-between;
				background-color: ${colors.blackSqueeze};
				${elevate('Modal')}

                .ButtonWrapper {
                    display: flex;
                    align-items: center;

                    > :first-child {
                        margin-right: ${spacing.spacingmd};
                    }
                }
			}

            .Modal--Header {
                padding: ${spacing.spacinglg} ${spacing.spacing3xl};
            }

			.Modal--Content {
                .Form--Footer, .Form--FieldsWrapper {
                    padding: ${spacing.spacinglg} ${spacing.spacing3xl};
                }

                .Form--FieldsWrapper {
                    padding-top: 0;
                }
			}
		}
	}

	.Modal--Header {
		&-Label {
			max-width: ${spacing.layoutSoBig};
			font-size: ${spacing.spacingsm};
			letter-spacing: 0;
			color: ${colors.imperialPrimer};
			font-weight: ${fontBold};
			text-transform: uppercase;
			margin-bottom: ${spacing.spacingxs};
		}

		&-Heading {
			font-size: ${spacing.spacing2lg};
			font-weight: ${fontLight};
			color: ${colors.stormPetrel};
			max-width: ${spacing.layoutSoBig};
			line-height: 1.5;
		}

		&-Close {
			position: absolute;
			top: ${spacing.spacingmd};
			right: ${spacing.spacingmd};
			overflow: hidden;
			cursor: pointer;
			background-color: transparent;
			border: none;
			padding: ${spacing.spacing2xs};

			:focus {
				outline: 1px solid ${colors.blueFrance};
			}

            :hover {
                background-color: ${colors.blueFrance};
                fill: white;
            }

			svg {
				height: ${spacing.spacingmd};
				width: ${spacing.spacingmd};
			}
		}
	}

	.Modal--Content {
		overflow-y: auto;
		/* margin-bottom: ${spacing.spacing3xl}; */
		color: ${colors.blueFrance};
		font-weight: ${fontNormal};

		p {
			max-width: ${spacing.layoutSoBig};
			line-height: 1.5;
			padding: 0 0 ${spacing.spacingmd};
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
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${transparentize(0.40, colors.stormPetrel)};
        ${elevate('Overlay')}
    }
`;