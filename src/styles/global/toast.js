
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
    .ToastContainer {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        z-index: 100;
        right: 0;
        pointer-events: none;
        margin-top: 3rem;

        > * {
            pointer-events: all;
        }

        .Notification--toast {
            margin-bottom: 0;
        }
    }
`;