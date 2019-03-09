import styled from 'styled-components';

import {elevate} from 'styles/mixins/index';
import * as colors from 'styles/colors';
import * as space from 'styles/sizing';
import {border} from 'styles/variables';
import {lighten} from 'polished';

import { fontBold, fontLight } from 'styles/variables';

export const CarouselWrapper = styled.div`
    background-color: ${colors.amour};
    height: 100%;
    width: 100%;
`;
