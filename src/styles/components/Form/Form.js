import styled from 'styled-components';

import {elevate, transition} from 'styles/mixins/index';
import {stormPetrel, fuelTown, blueFrance, blackSqueeze} from 'styles/colors';
import {
    layoutxs,
    layoutsm,
    spacing2lg,
    spacingsm,
    spacinglg,
    _14px,
    spacing3xs,
    spacingmd,
    spacing2xl,
    spacingxs
} from 'styles/sizing';
import {border} from 'styles/variables';
import {lighten} from 'polished';

import { fontBold, fontLight } from 'styles/variables';

export const FormWrapper = styled.div`
    &.Form {
        form {
            border: 1px solid ${stormPetrel};
        }

        &--Modal {

            form {
                border:none;
                padding: 0;
            }
        }
    }

    .Form--Title {
        margin-bottom: ${layoutsm};
        font-size: ${spacing2lg};
        font-weight: ${fontLight};
    }

    .Input {
        margin-bottom: 1rem;
    }

    .Input--Label {
        font-size: ${_14px};
        font-weight:${fontBold};
        display: block;
        margin-bottom: ${spacingxs};
        color: ${fuelTown}
    }

    .Input--Text,
    .Input--Number {
        box-shadow: 0 1px 0 0 ${stormPetrel};
        border-bottom: 1px solid transparent;
        ${transition()}

        input {
            display: block;
            width: 100%;
            height: ${spacing2xl};
            padding: 0 ${spacingmd};
            background-color: ${blackSqueeze};

            :focus {
                outline: none;
                box-shadow: 0 ${spacing3xs} 0 0 ${blueFrance};
            }
        }
    }

    .Radio--Wrapper {
        margin-bottom: 0.5rem;

        input {
            vertical-align: middle;
            padding: 0.5rem;
            margin-right: 0.5rem;
        }
    }

    form {
        background-color: white;
        padding: ${spacinglg};
        ${elevate('Raised')}

        input {
            font-size: ${_14px};
            color: ${blueFrance};
            border: none;
        }

        .Alert {
            margin-top: ${spacingxs};
            font-size: ${spacingsm};
        }
    }

    &.Form--Addingredient {
        .Form--FieldsWrapper {
            display: grid;
            grid-template-areas: "row1 row1" "left right";
            grid-gap: 1rem;
        }

        .Input {
            :first-of-type {
                grid-column-start: row1;
                grid-column-end: row1;
                width: 100%;
            }
        }
    }
`;

