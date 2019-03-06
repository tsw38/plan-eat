import { createGlobalStyle } from 'styled-components';

import {azureRadiance, malibu, nevada, outerSpace} from '../colors';

import {transition} from '../mixins/index';

import {
    fontSize,
    spacingsm,
    spacingmd,
    spacing2xs
} from 'styles/sizing';

export default createGlobalStyle`
    .Link {
        font-weight: 600;
        text-decoration: underline;
        color: ${azureRadiance};
        ${transition()}

        &:hover {
            color: ${malibu};
        }

        &--Secondary {
            color: ${outerSpace};

            &:hover {
                color: ${nevada};
            }
        }

        &--Ghost {
            text-decoration: none;
        }
    }
`;