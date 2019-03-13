import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten } from 'polished';

import * as colors from 'styles/colors';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

export default createGlobalStyle`
    .Alert {
        &--Error {
            color: ${colors.amour};
        }
    }
`;