import styled from 'styled-components';
import {lighten} from 'polished';

import {elevate} from 'styles/mixins/index';
import {border} from 'styles/variables';
import * as colors from 'styles/colors';
import * as space from 'styles/sizing';

import { fontBold, fontLight } from 'styles/variables';

export const NutritionBand = styled.div`
    background-color: white;
    height: 190px;
    width: 100%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;
