import { createGlobalStyle } from 'styled-components';

import { darken } from 'polished';

import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

import {polychromes} from 'styles/colors';


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
                    border-bottom: 2px solid ${darken(0.2, polychromes.blueFrance)};
                }

                &:focus {
                    outline: 1px solid ${polychromes.blueFrance};
                }
            }

            span {
                :hover {
                    color: ${polychromes.blueFrance};
                }
            }
        }
    }
`;