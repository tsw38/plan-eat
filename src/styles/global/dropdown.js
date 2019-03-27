
import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, transparentize } from 'polished';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

import {polychromes, monochromes, brand} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

export default createGlobalStyle`
    .Dropdown {
        position: relative;
        display: inline-block;
        width: 100%;
        cursor: pointer;
        padding: 0.8125rem 1rem;
        font-size: ${sizing.spacingsml};
        font-weight: ${variables.fontNormal};
        white-space: nowrap;
        text-overflow: ellipsis;
        background-color: ${colors.white};
        box-shadow: 0 1px 0 0 ${colors.grey40};
        border: 1px solid transparent;
        border-bottom: 1px solid transparent;

        :after {
            content: '';
            display: block;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAo0lEQVQ4y9XRsQrCMBSF4fPrksfrUERExMFBOhSRDkWcfI08Tp9KSolLApdgaxx7IUPI/U5CrrT+cs5tJHngUmpir49WXlKQNAHnAnySNEXjBVzjJoUcF/DB4BCtBDRZyP4L3mW4yRtaEzICtTmrJY0Gt3NPvGUhFVBl+P7rkzoT8o4r4a50TL0JSbgvHXMKeRj8nOvbLmQMQACGEMLrr9vXVR/DczsO6OprqwAAAABJRU5ErkJggg==);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 0.5rem;
            position: absolute;
            right: 0;
            top: 0;
            height: 2.625rem;
            width: 2.625rem;
            transform-origin: 50% 50%;
            transform: rotate(0deg);
        }

        &.noHover {
            pointer-events: none;
            user-select: none;
        }

        &:focus, &:focus-within {
            background-color: ${darken(0.035, monochromes.white)};
            border: 1px solid ${darken(0.075, monochromes.white)};

            :after {
                transform: rotate(180deg);
            }
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
            ${transition('Small', 'ease-in')}

            .SubList {
                display: block;
                text-decoration: none;
                font-weight: 400;

                text-overflow: ellipsis;
                overflow: hidden;
                cursor: pointer;

                p {
                    font-weight: ${variables.fontBold};
                    padding: 1rem 1.5rem 0rem 1rem;
                }

                ul li {
                    padding-left: 1.5rem;
                }
            }
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
                background-color: ${transparentize(0.85, brand)};
                outline: 1px solid transparent;
                text-decoration: underline;
                color: #152935;
            }
        }
    }

    .Dropdown--Label {
        display: block;
        margin-bottom: 1rem;
    }

    .Dropdown--Filter {
        padding: 0;
    }

    .Dropdown-Wrapper {
        .Dropdown:focus &, .Dropdown:focus-within & {
            background-color: red;

            .Dropdown-List {
                max-height: ${sizing.layout4xl};
                overflow-y: scroll;
            }

        }
    }
`;