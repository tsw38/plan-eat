import { createGlobalStyle } from 'styled-components';

import {blueFrance, fuelTown, imperialPrimer} from '../colors';

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
        color: ${blueFrance};
        ${transition()}


        &:hover {
            color: ${blueFrance};
            text-decoration: underline;
        }

        &--Secondary {
            color: ${imperialPrimer};

            &:hover {
                color: ${blueFrance};
            }
        }

        &--Ghost {
            text-decoration: none;
        }
    }
`;