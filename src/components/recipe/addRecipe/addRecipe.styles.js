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
        .Form--FieldsWrapper {
            display: grid;
            grid-gap: ${sizing.spacingmd};
            grid-template-columns: calc(50% - ${sizing.spacingxs}) auto;
        }
        form {
            padding: 0;
            border: none;
            box-shadow: none;
            background-color: initial;
        }

        #name {
            border: 1px solid transparent;
            box-shadow: none;
            font-size: 2rem;
            margin: 0;
            padding: 0;
            resize: none;
            margin-bottom: 0.75rem;
            font-size: 2.5rem;
            font-style: italic;
            font-weight: 700;
            color: black;

            :hover {
                /* border: 1px solid ${colors.stormPetrel}; */
                background-color: ${lighten(0.05, colors.blackSqueeze)};
            }
        }
    }
`;