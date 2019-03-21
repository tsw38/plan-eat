import styled from 'styled-components';
import Modal from 'react-modal';

import {elevate} from 'styles/mixins/index';
import {polychromes, monochromes} from 'styles/colors';

import * as spacing from 'styles/sizing';

import {fontBold, fontLight, fontNormal} from 'styles/variables';

export const StyledModal = styled(Modal)`
	&.Modal {
        position: relative;
		background-color: white;
		padding: ${spacing.spacing3xl} ${spacing.spacing3xl} 0;
		max-width: 700px;
        width: 70vw;
        min-width: 400px;
		max-height: 90vh;
        overflow-y: auto;

		${elevate('Modal')}

		&--Transactional,
        &--Passive {
			border-top: ${spacing.spacing2xs} solid ${polychromes.brand};
		}

		&--Danger,
        &--Danger-Passive {
			border-top: ${spacing.spacing2xs} solid ${polychromes.red};

            .Modal--Header-Close {
                :focus {
                    outline: 1px solid ${polychromes.red};
                }

                :hover {
                    background-color: ${polychromes.red};
                }
            }
		}

        &--Passive,
        &--Danger-Passive {
            padding: ${spacing.spacing3xl};
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
				background-color: ${monochromes.white};
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
			color: ${monochromes.black};
			font-weight: ${fontBold};
			text-transform: uppercase;
			margin-bottom: ${spacing.spacingxs};
		}

		&-Heading {
			font-size: ${spacing.spacing2lg};
			font-weight: ${fontLight};
			color: ${monochromes.grey40};
			max-width: ${spacing.layoutSoBig};
			line-height: 1.5;
            margin-bottom: ${spacing.spacingmd};
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
				outline: 1px solid ${polychromes.brand};
			}

            :hover {
                background-color: ${polychromes.brand};
                fill: white;

                .Modal--Danger & {
                    background-color: ${polychromes.brand};
                }
            }

			svg {
				height: ${spacing.spacingmd};
				width: ${spacing.spacingmd};
			}
		}
	}

	.Modal--Content {
		overflow-y: auto;
		/* color: ${colors.brand}; */
		font-weight: ${fontNormal};

		p {
			max-width: ${spacing.layoutSoBig};
			line-height: 1.5;
			padding: 0 0 ${spacing.spacingmd};
		}
	}

    .Modal--Footer {
        display: grid;
        grid-gap: 0.75rem;
        grid-template-columns: auto auto;
        margin-top: 2rem;
        justify-content: flex-end;
        background-color: ${monochromes.white};
        margin-left: -3rem;
        margin-right: -3rem;
        padding: 1rem 3rem;

        &:empty {
            display:none;
        }
    }
`;