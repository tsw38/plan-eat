
import { createGlobalStyle, keyframes } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten, transparentize } from 'polished';

import * as colors from 'styles/colors';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export default createGlobalStyle`
    .Loading {
        justify-content: center;
        align-items: center;
        height: inherit;
        margin: 0;

        &--loading {
            svg {
                display: inline-block;
                animation: ${rotate} 1s linear infinite;
            }
        }

        &--success {

        }

        .Icon--Wrapper {
            height: inherit;

            svg {
                padding: 0;
                width: auto;
                position: relative;
                fill: ${colors.fuelTown};

                * {
                    fill: inherit;
                }
            }
        }
    }

    .Loading--inline {
        display: inline-grid;
        max-height: ${sizing.spacingxl};
        height: 100%;
    }

    .Loading--full {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        height: 100vh;
        width: 100vw;
        display: flex;
        background-color: ${transparentize(0.25, colors.blackSqueeze)};
        justify-content: center;
        align-items: center;
        padding: 10rem;
        opacity: 0;
        pointer-events: none;
        user-select: none;

        &--render {
            opacity: 1;
            pointer-events: initial;
            user-select: initial;

            svg {
                animation: ${rotate} 750ms linear infinite;
            }
        }

        .Icon--Wrapper {
            height: 100%;
            max-height: 10vh;
        }
    }
`;
