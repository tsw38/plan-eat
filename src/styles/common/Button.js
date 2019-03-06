
import { createGlobalStyle } from 'styled-components';
import {transition} from '../mixins/index';
import {darken} from 'polished';

import {
    azureRadiance,
    malibu,
    nevada,
    white,
    outerSpace,
    velencia
} from 'styles/colors';

import { spacingsm, spacing2xl, spacingmd } from 'styles/sizing';

import { fontBold } from 'styles/variables';

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
        height: ${spacing2xl};
        padding: 0 ${spacingmd};
        border-radius: 0;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        line-height: ${spacingmd};
        ${transition()}


        &--Header {
            position: relative;
        }

        &--Primary {
            color: ${white};
            background-color: ${azureRadiance};
            border: 2px solid ${azureRadiance};

            &:hover {
                background-color: ${darken(0.1, azureRadiance)};
                border-color: ${darken(0.1, azureRadiance)};
            }

            &--Small {}
            &--Disabled {}
        }

        &--Primary--Danger {
            color: ${white};
            background-color: ${velencia};
            border: 2px solid ${velencia};

            &:hover {
                background-color: ${darken(0.1, velencia)};
                border-color: ${darken(0.1, velencia)};
            }

            &--Small {}
        }

        &--Secondary {
            color: ${azureRadiance};
            background-color: transparent;
            border: 2px solid ${azureRadiance};

            &:hover {
                background-color: ${azureRadiance};
                color: ${white};
            }

            &--Small {}
            &--Disabled {}
        }

        &--Secondary--Danger {
            color: ${velencia};
            background-color: transparent;
            border: 2px solid ${velencia};

            &:hover {
                background-color: ${velencia};
                color: ${white};
            }

            &--Small {}
        }

        &--Tertiary {
            color: ${outerSpace};
            background-color: transparent;
            border: 2px solid ${outerSpace};

            &:hover {
                background-color: ${outerSpace};
                color: ${white};
            }

            &--Small {}
            &--Disabled {}
        }

        &--Ghost {
            &--Small {}
            &--Disabled {}
        }
    }
`;