import { createGlobalStyle } from 'styled-components';

import {blueFrance, joustBlue, fuelTown, imperialPrimer} from '../colors';

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
            color: ${joustBlue};
        }

        &--Secondary {
            color: ${imperialPrimer};

            &:hover {
                color: ${fuelTown};
            }
        }

        &--Ghost {
            text-decoration: none;
        }
    }
`;