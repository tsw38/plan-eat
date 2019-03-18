
import { createGlobalStyle, keyframes } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

import * as sizing from 'styles/sizing';

import {monochromes} from 'styles/colors';

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
            svg, img {
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
                fill: ${monochromes.fuelTown};

                * {
                    fill: inherit;
                }
            }
        }
    }

    .Loading--inline {
        display: inline-block;
        max-height: 2rem;
        max-width: 2rem;
        height: 100%;
        width: 100%;

        .Loading--Icon {
            height: inherit;
            max-height: inherit;

            img {
                display: block;
                height:fill-available;
            }
        }
    }

    .Loading--full {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        height: 100vh;
        width: 100vw;
        display: flex;
        background-color: ${transparentize(0.25, monochromes.blackSqueeze)};
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
