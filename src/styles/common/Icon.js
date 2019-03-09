
import styled, { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from '../mixins/index';
import {darken, lighten, parseToHsl, rgbToColorString} from 'polished';

import * as colors from 'styles/colors';

import * as sizing from 'styles/sizing';

export const IconChildrenStyles = styled.div`
    /* padding: ${sizing.spacingsm}; */
    overflow: hidden;
    border-radius: 50%;
    max-height: ${sizing.layoutsm};
    max-width: ${sizing.layoutmd};
    margin: ${sizing.spacingxs};

    img {
        height: 100%;
        width: 100%;
    }
`;