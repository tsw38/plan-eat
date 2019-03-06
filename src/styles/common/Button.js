
import styled, { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from '../mixins/index';
import {darken, lighten} from 'polished';

import {
    blueFrance,
    white,
    imperialPrimer,
    amour,
    stormPetrel
} from 'styles/colors';

import { spacing3xs, spacingsm, spacing2xs, spacingmd, spacingxs, spacinglg } from 'styles/sizing';

import { fontBold } from 'styles/variables';

export const StyledButton = styled.button`

`;

export default createGlobalStyle`
    .Button {
        letter-spacing: 0;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: ${spacingsm};
        font-weight: ${fontBold};
        padding: ${spacingxs} ${spacingmd};
        border-radius: 0;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        line-height: ${spacingmd};
        border-width: ${spacing3xs};
        border-style: solid;
        ${transition()}


        &--Header {
            position: relative;
        }

        &--Small {
            padding: ${spacing2xs} ${spacingxs};
        }

        &--Disabled {
            pointer-events: none;
            user-select: none;
            cursor: not-allowed;

            &.Button--Primary {
                ${colorButtons(lighten(0.20, blueFrance))}
            }

            &.Button--Secondary {
                ${colorButtons(lighten(0.20, blueFrance), true)}
            }

            &.Button--Tertiary {
                ${colorButtons(stormPetrel, true)}

                &--Full {
                    ${colorButtons(stormPetrel)}
                }
            }
            &.Button--Primary--Danger {
                ${colorButtons(lighten(0.20, amour))}
            }

            &.Button--Secondary--Danger {
                ${colorButtons(lighten(0.20, amour), true)}
            }
        }

        &--Primary {
            ${colorButtons(blueFrance)};
            .Icon { fill: ${blueFrance}; }

            &:hover {
                ${colorButtons(darken(0.20, blueFrance))}
            }
        }

        &--Secondary {
            ${colorButtons(blueFrance, true)};
            .Icon { fill: ${blueFrance}; }

            &:hover {
                ${colorButtons(blueFrance)}
            }
        }

        &--Tertiary {
            ${colorButtons(imperialPrimer, true)}
            .Icon { fill: ${imperialPrimer}; }

            &:hover {
                ${colorButtons(imperialPrimer)}
            }

            &--Full {
                ${colorButtons(imperialPrimer)}

                &:hover {
                    ${colorButtons(imperialPrimer, true)}
                }
            }

            .Button--Disabled & {}
        }

        &--Primary--Danger {
            ${colorButtons(amour)}
            .Icon { fill: ${amour}; }

            &:hover {
                ${colorButtons(darken(0.2, amour, true))}
            }
        }


        &--Secondary--Danger {
            ${colorButtons(amour, true)}
            .Icon { fill: ${amour}; }

            &:hover {
                ${colorButtons(amour)}
            }
        }

        &--Ghost {
            .Button--Disabled & {}
        }

        &.Tag {
            padding: 0 0 0 ${spacingmd};

            svg {
                height: ${spacinglg};
                width: ${spacinglg};
                padding: ${spacing2xs};
                background-color: white;
                margin-left: ${spacingxs};
            }
        }
    }
`;