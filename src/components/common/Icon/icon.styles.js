
import styled, { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import {darken, lighten, parseToHsl, rgbToColorString} from 'polished';

import * as sizing from 'styles/sizing';


export const IconChildrenStyles = styled.div`
    /* padding: ${sizing.spacingsm}; */
    overflow: hidden;
    border-radius: 50%;
    max-height: ${sizing.layoutsm};
    max-width: ${sizing.layoutsm};
    margin: ${sizing.iconMargin};

    img {
        height: 100%;
        width: 100%;
    }
`;