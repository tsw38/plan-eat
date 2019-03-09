import { createGlobalStyle } from 'styled-components';

import {blueFrance, fuelTown, imperialPrimer} from '../colors';

import {transition} from '../mixins/index';

import {
    fontSize,
    spacingsm,
    spacingmd,
    spacing2xs
} from 'styles/sizing';

import { fontBold } from 'styles/variables';

export default createGlobalStyle`
    .Link {
        font-weight: ${fontBold};
        text-decoration: none;
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