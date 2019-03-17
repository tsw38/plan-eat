import styled from 'styled-components';

import {transition} from 'styles/mixins/index';
import {darken, lighten} from 'polished';

import * as sizing from 'styles/sizing';
import {monochromes} from 'styles/colors';

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
                background-color: ${lighten(0.05, monochromes.blackSqueeze)};
            }
        }

        .Recipe--Section {
            border-bottom: none;

            &--List--item {
                display: grid;
                width: 100%;
                grid-template-columns: auto 1fr;
                grid-gap: 0.5rem;
            }
        }

        .Recipe--Image {
            position: relative;
            background-color: ${monochromes.ballerina};
            ${transition()};

            &:hover {
                cursor: pointer;
                background-color: ${darken(0.1, monochromes.ballerina)};
            }

            .forcedLayout {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-size:cover;
                background-position:center center;
                background-repeat: no-repeat;
            }
        }
    }

    .Input--Textarea {
        textarea {
            box-shadow: none;
            border: none;
            font-size: 1rem;
            padding: 0;
            line-height: 1;
            color: ${monochromes.fuelTown};

            :hover,
            :focus {
                box-shadow: none;
                background-color: ${lighten(0.05, monochromes.blackSqueeze)};
            }
        }
    }

    .Input--File {
        opacity: 0;

        label {
            height: 100%;
            width: 100%;
            position: absolute;
        }
    }
`;