
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
        background-color: ${polychromes.doubleDragon};
        width: 100%;
        padding: .8125rem 1rem;
        font-weight: ${variables.fontNormal};
        white-space: nowrap;
        text-overflow: ellipsis;
        border: 1px solid transparent;

        &-SelectedText {
            cursor: pointer;
        }

        &-List {
            display: none;
            position: absolute;
            left:0;
            right:0;
            bottom: calc(-0.8125rem * 2);
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
            z-index: 1;

            .Dropdown:hover & {
                display: block;
            }
        }
    }
`;