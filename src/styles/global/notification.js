
import { createGlobalStyle } from 'styled-components';
import {elevate} from 'styles/mixins/index';
import { lighten, transparentize } from 'polished';

import {polychromes, monochromes} from 'styles/colors';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';


const colors = {
    ...polychromes,
    ...monochromes
}

export default createGlobalStyle`
    .Notification {
        display: inline-block;
        flex-direction: column;
        font-size: ${sizing.spacingsml};
        justify-content: space-between;
        background-color: white;
        padding: ${sizing.spacingsm} ${sizing.spacingmd};
        min-height: ${sizing.spacing2xl};
        color: ${lighten(0.2, colors.grey60)};
        margin-top: ${sizing.spacingmd};
        margin-bottom: ${sizing.spacingmd};
        border-style: solid;
        border-left-width: ${sizing.spacing2xs} !important;
        position: relative;

        ${'' /* type */}
        &--inline {
            border-width: 1px;
        }
        &--toast {
            ${elevate('Overlay')}


            &.Notification--dark {
                ${elevate('Overlay--dark')}
            }
        }

        ${'' /* scale */}
        &--information {
            border-color: ${colors.brand};
            fill: ${colors.brand};
        }
        &--success {
            border-color: ${colors.green};
            fill: ${colors.green};
        }
        &--error {
            border-color: ${colors.red};
            fill: ${colors.red};
        }
        &--warning {
            border-color: ${colors.yellow};
            fill: ${colors.yellow};
        }
    }

    .Notification--dark {
        background-color: ${colors.black};
        color: ${colors.white};
    }


    .Notification--Wrapper {
        display: grid;
        grid-template-areas: 'icon header close' 'icon body close';
    }

    .Notification--Icon {
        width: ${sizing.spacingsml};
        grid-area: icon;
        ${'' /* min-width: ${sizing.spacinglg}; */}
        align-items: center;
        justify-content: center;
        display: flex;

        &--Close {
            grid-area: close;
            cursor: pointer;
            fill: ${colors.grey60};

            .Notification--dark & {
                fill: ${colors.white};
            }
        }

        .Icon--Wrapper {
            svg {
                height: inherit;
                width: inherit;
            }
        }
    }

    .Notification--Header {
        display: flex;
        font-size: ${sizing.spacingsml};
        flex-wrap: wrap;
        margin: 0 ${sizing.spacingmd};
        grid-area: header;

        &--Title {
            color: ${colors.black};
            font-weight: ${variables.fontBold};
            margin-right: ${sizing.spacing2xs};

            .Notification--dark & {
                color: ${transparentize(0.5, colors.white)};
            }
        }
    }

    .Notification--Body {
        font-size: ${sizing.spacingsml};
        line-height: 1.125;
        max-width: ${sizing.layoutSoBig};
        line-height: 1.5;
        grid-area: body;
        margin: 0.25rem 1rem;

        > * {
            font-size: inherit;
            line-height: inherit;
            max-width: inherit;
            line-height: inherit;
        }
    }
`;