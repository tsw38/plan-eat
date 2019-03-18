import styled, {createGlobalStyle} from 'styled-components';

import {transition, colorButtons} from 'styles/mixins/index';
import {darken, lighten, parseToHsl, rgbToColorString} from 'polished';

import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';
import {polychromes, monochromes} from 'styles/colors';

import { StyledSignin } from 'styles/views/Signin';

const colors = {
    ...polychromes,
    ...monochromes
}

export default createGlobalStyle`
    .Form--addIngredient {
        .Form--FieldsWrapper {
            display: grid;
            grid-template-areas:
                'name name name'
                'serving scaleType measurement'
                'grocerSection grocerSection grocerSection'
                'nutrition nutrition nutrition';
            grid-gap: 1rem;
            grid-template-columns: 1fr 1fr 1fr;
        }

        .Row {
            &--Name {
                grid-area: name;
            }
        }

        .Input.Serving {
            grid-area: serving;
        }

        .Input.grocerSection {
            grid-area: grocerSection;
        }

        .Nutrition {
            grid-area: nutrition;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
        }
    }
`;