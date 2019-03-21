import { createGlobalStyle } from 'styled-components';

import {brand, black} from '../colors';

import {transition} from 'styles/mixins/index';

import { fontBold } from 'styles/variables';

export default createGlobalStyle`
    .Link {
        font-weight: ${fontBold};
        text-decoration: none;
        color: ${brand};
        ${transition()}


        &:hover {
            color: ${brand};
            text-decoration: underline;
        }

        &--Secondary {
            color: ${black};

            &:hover {
                color: ${brand};
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