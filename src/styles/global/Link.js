import { createGlobalStyle } from 'styled-components';

import {blueFrance, imperialPrimer} from '../colors';

import {transition} from 'styles/mixins/index';

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

        &.Button {
            text-decoration: none;
        }
    }
`;