
import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten } from 'polished';

import * as colors from 'styles/colors';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

export default createGlobalStyle`
    .Tabs {
        &--Header {
            ${'' /* display: grid; */}
            cursor: pointer;
            font-size: ${sizing.spacingsml};
            font-weight: ${variables.fontBold};

            &--Item {
                display:inline-block;
                padding: ${sizing.spacingsm} 0;
                margin:0 3rem 1rem 0;

                &.react-tabs__tab--selected {
                    border-bottom: 2px solid ${darken(0.2, colors.blueFrance)};
                }

                &:focus {
                    outline: 1px solid ${colors.blueFrance};
                }
            }

            span {
                :hover {
                    color: ${colors.blueFrance};
                }
            }
        }
    }
`;