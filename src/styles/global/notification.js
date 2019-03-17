
import { createGlobalStyle } from 'styled-components';
import {elevate} from 'styles/mixins/index';
import { lighten, transparentize } from 'polished';

import * as colors from 'styles/colors';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

export default createGlobalStyle`
    .Notification {
        display: inline-block;
        flex-direction: column;
        font-size: ${sizing.spacingsml};
        justify-content: space-between;
        background-color: white;
        padding: ${sizing.spacingsm} ${sizing.spacingmd};
        min-height: ${sizing.spacing2xl};
        color: ${lighten(0.2, colors.fuelTown)};
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
        }

        ${'' /* scale */}
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
    }

    .Notification--dark {
        background-color: ${colors.imperialPrimer};
        color: ${colors.blackSqueeze};
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
            fill: ${colors.fuelTown};

            .Notification--dark & {
                fill: ${colors.blackSqueeze};
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
            color: ${colors.imperialPrimer};
            font-weight: ${variables.fontBold};
            margin-right: ${sizing.spacing2xs};

            .Notification--dark & {
                color: ${transparentize(0.5, colors.blackSqueeze)};
            }
        }
    }

    .Notification--Body {
        font-size: ${sizing.spacingsml};
        line-height: 1.125;
        max-width: ${sizing.layoutSoBig};
        line-height: 1.5;
        grid-area: body;
        margin-left: ${sizing.spacingmd};
        margin-top: ${sizing.spacing2xs};

        > * {
            font-size: inherit;
            line-height: inherit;
            max-width: inherit;
            line-height: inherit;
        }
    }
`;