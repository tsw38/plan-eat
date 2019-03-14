import styled from 'styled-components';

import {transition, colorButtons} from 'styles/mixins/index';
import {darken, lighten, parseToHsl, rgbToColorString} from 'polished';

import * as sizing from 'styles/sizing';
import * as colors from 'styles/colors';
import * as variables from 'styles/variables';

import { StyledRecipe } from 'components/recipe/recipe.styles';

export const AddRecipe = styled(StyledRecipe)`
    &.Recipe--Add {
        display: block;
    }

    .Form--addRecipe {
        form {
            padding: 0;
            border: none;
            box-shadow: none;
            background-color: initial;
        }
    }
`;