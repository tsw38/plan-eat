
import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten } from 'polished';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

export default createGlobalStyle`
    .Dropdown {
        position: relative;
        display: inline-block;
        width: 100%;
        padding: .8125rem 1rem;
        font-size: ${sizing.spacingsml};
        font-weight: ${variables.fontNormal};
        white-space: nowrap;
        text-overflow: ellipsis;
        background-color: ${colors.white};
        box-shadow: 0 1px 0 0 ${colors.grey40};
        border: 1px solid transparent;
        border-bottom: 1px solid transparent;

        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAo0lEQVQ4y9XRsQrCMBSF4fPrksfrUERExMFBOhSRDkWcfI08Tp9KSolLApdgaxx7IUPI/U5CrrT+cs5tJHngUmpir49WXlKQNAHnAnySNEXjBVzjJoUcF/DB4BCtBDRZyP4L3mW4yRtaEzICtTmrJY0Gt3NPvGUhFVBl+P7rkzoT8o4r4a50TL0JSbgvHXMKeRj8nOvbLmQMQACGEMLrr9vXVR/DczsO6OprqwAAAABJRU5ErkJggg==);
        background-repeat: no-repeat;
        background-position: 98% center;
        background-size: 0.5rem;

        &.noHover {
            pointer-events: none;
            user-select: none;
        }

        &:hover {
            background-color: ${darken(0.035, monochromes.white)};
            border: 1px solid ${darken(0.075, monochromes.white)};
        }

        &-SelectedText {
            cursor: pointer;
            font-weight: ${variables.fontBold};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &-List {
            z-index: 1;
            position: absolute;
            left:0;
            right:0;
            top: calc(0.8125rem * 2 + 1rem);
            background-color: ${colors.white};
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            min-width: 160px;
            max-height: 0;
            overflow-y: hidden;
            ${transition('Panel', 'ease-in')}
        }

        &-List-Item {
            display: block;
            text-decoration: none;
            font-weight: 400;
            padding: 1rem 1.5rem 1rem 1rem;
            text-overflow: ellipsis;
            overflow: hidden;
            cursor: pointer;

            &:hover {
                background-color: rgba(85,150,230,.1);
                outline: 1px solid transparent;
                text-decoration: underline;
                color: #152935;
            }
        }
    }

    .Dropdown-Wrapper {
        .Dropdown:hover & {

            .Dropdown-List {
                max-height: ${sizing.layout4xl};
                overflow-y: scroll;
            }

        }
    }
`;