import styled from 'styled-components';

import {elevate} from 'styles/mixins/index';
import * as colors from 'styles/colors';
import * as space from 'styles/sizing';
import {border} from 'styles/variables';
import {lighten} from 'polished';

import { fontBold, fontLight } from 'styles/variables';

export const StyledDonutChart = styled.div`
    &.DonutChart {
        height: inherit;

        svg {
            transform-origin: 50% 50%;
            transform: rotateY(180deg) rotatez(-90deg);
        }
    }
`;