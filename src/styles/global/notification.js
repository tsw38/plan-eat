
import { createGlobalStyle } from 'styled-components';
import {transition, elevate} from 'styles/mixins/index';
import { darken, lighten } from 'polished';

import * as colors from 'styles/colors';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

export default createGlobalStyle`
    .Notification {
        display: inline-block;
        flex-direction: column;
        font-size: ${sizing.spacingsml};
        justify-content: space-between;
        background-color: transparent;
        padding: ${sizing.spacingsm} ${sizing.spacingmd};
        min-height: ${sizing.spacing2xl};
        color: ${lighten(0.2, colors.fuelTown)};
        margin-top: ${sizing.spacingmd};
        margin-bottom: ${sizing.spacingmd};
        border-style: solid;
        border-left-width: ${sizing.spacing2xs} !important;
        position: relative;

        &--inline {
            border-width: 1px;
        }

        &--toast {
            background-color: white;
            ${elevate('Overlay')}
        }

        &--information {
            border-color: ${colors.blueFrance};
            fill: ${colors.blueFrance};
        }
        &--success {
            border-color: ${colors.carribean};
            fill: ${colors.carribean};
        }
        &--error {
            border-color: ${colors.amour};
            fill: ${colors.amour};
        }
        &--warning {
            border-color: ${colors.casandora};
            fill: ${colors.casandora};
        }



        > .Icon--Wrapper {
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            height: ${sizing.spacingsml};
            width: ${sizing.spacingsml};
            position: absolute;
            top: ${sizing.spacing2xs};
            right: ${sizing.spacingxs};
            fill: ${colors.fuelTown};
        }
    }

    .Notification--Wrapper {
        display: grid;
        grid-template-areas: 'icon header' 'icon body';

        .Icon--Wrapper {
            width: ${sizing.spacingsml};
            grid-area: icon;
            min-width: ${sizing.spacinglg};
            align-items: center;
            justify-content: center;
            display: flex;

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
            color: ${colors.imperialPrimer};
            font-weight: ${variables.fontBold};
            margin-right: ${sizing.spacing2xs};
        }
    }

    .Notification--Body {
        font-size: ${sizing.spacingsml};
        line-height: 1.125;
        max-width: 38rem;
        line-height: 1.5;
        grid-area: body;
        margin-left: ${sizing.spacingmd};

        > * {
            font-size: inherit;
            line-height: inherit;
            max-width: inherit;
            line-height: inherit;
        }
    }
`;