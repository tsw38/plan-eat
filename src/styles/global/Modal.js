import { createGlobalStyle } from 'styled-components';
import {transparentize} from 'polished';

import {elevate} from 'styles/mixins/index';
import * as colors from 'styles/colors';

export default createGlobalStyle`
    .ReactModalPortal { }

    .Modal--Overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${transparentize(0.25, colors.stormPetrel)};
        ${elevate('Overlay')}
    }
`;