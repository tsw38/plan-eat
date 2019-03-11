import styled from 'styled-components';

import {elevate, transition} from 'styles/mixins/index';
import * as colors from 'styles/colors';
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

import { fontBold, fontLight, fontNormal } from 'styles/variables';

export const FormWrapper = styled.div`
    &.Form {
        form {
            border: 1px solid ${colors.stormPetrel};
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
        color: ${colors.fuelTown}
    }

    .Input--Text,
    .Input--Number,
    .Input--Email,
    .Input--Password,
    .Input--Select {
        ${transition()}

        input, select {
            -webkit-appearance: none;
            border-radius: 0;
            display: block;
            width: 100%;
            height: ${spacing2xl};
            padding: 0 ${spacingmd};
            background-color: ${colors.blackSqueeze};

            box-shadow: 0 1px 0 0 ${colors.stormPetrel};
            border-bottom: 1px solid transparent;

            :focus {
                outline: none;
                box-shadow: 0 ${spacing3xs} 0 0 ${colors.blueFrance};
            }
        }
    }

    .Input--Radio {
        fieldset .Input--Label {
            margin-bottom: 1rem;
        }

        label {
            display: block;
            position: relative;
            padding-left: 1.5rem;
            cursor: pointer;
            font-size: 1rem;
            user-select: none;
        }

        label > .Input--Label {
            font-weight: ${fontNormal};
        }

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        .Radio--Button {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 50%;
            height: 1rem;
            width: 1rem;
            margin-right: 0.5rem;
            background-color: ${colors.blackSqueeze};
            border: 2px solid ${colors.stormPetrel};
        }

        label:hover input ~ .Radio--Button {

        }

        label input:checked ~ .Radio--Button {
            background-color: ${colors.blackSqueeze};
        }

        label input:checked ~ .Radio--Button:after {
            display: block;
            background-color: ${colors.blueFrance};
        }

        .Radio--Button:after {
            content: "";
            position: absolute;
            display: none;
            top: 0.125rem;
            left: 0.125rem;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background: white;
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

        input, select {
            font-size: ${_14px};
            color: ${colors.blueFrance};
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
            grid-template-columns: 1fr 1fr;
        }

        .Input {
            :nth-of-type(1) {
                grid-column-start: row1;
                grid-column-end: row1;
                width: 100%;
            }
        }
    }
`;

