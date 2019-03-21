
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
        top: 3rem;
        z-index: 100;
        right: 0.5rem;
        pointer-events: none;

        > * {
            pointer-events: all;
        }

        .Notification--toast {
            margin-bottom: 0;
            margin-top: 0.5rem;
        }
    }
`;