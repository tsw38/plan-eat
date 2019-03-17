import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten } from 'polished';

import {polychromes, monochromes} from 'styles/colors';

export default createGlobalStyle`
    .Alert {
        &--Error {
            color: ${polychromes.amour};
        }
    }
`;