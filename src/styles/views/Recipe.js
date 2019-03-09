import styled from 'styled-components';

import * as sizing from 'styles/sizing';
import * as colors from 'styles/colors';
import * as variables from 'styles/variables';

export const StyledRecipe = styled.div`
    &.Recipe {
        display: grid;
        grid-template-columns: calc(50% - ${sizing.spacingxs}) auto;
        width: 100%;
        grid-gap: ${sizing.spacingmd};

        .column {
            width: 100%;


            &:first-of-type {
                max-width: ${sizing.layoutSoBig};
                /* background-color: ${colors.blueFrance}; */
                /* padding-right: ${sizing.spacingxs}; */
            }

            &:last-of-type {
                background-color: ${colors.stormPetrel};

            }
        }
    }

    .Recipe {
        &--Header {
            .row {
                display: grid;
                grid-template-columns: auto auto;
                align-items: center;
            }
        }


        &--Title {
            margin: 0;
            padding-bottom: ${sizing.spacingsm};
            font-size: ${sizing.spacing2xl};
            font-style: italic;
        }

        &--Author {
            margin: 0;
            font-size: ${sizing.spacingsm};

            .Link {
                font-weight: ${variables.fontBold};
                color: ${colors.fuelTown};
            }
        }

        &--Rating {
            display: grid;
            grid-template-columns: repeat(5, auto);
            margin: 0 0 0 auto;

            .Button {
                border: none;
                padding: ${sizing.spacing3xs};

                .Icon--Wrapper {
                    height: ${sizing.spacingmdl};

                    svg {
                        width: auto;
                    }
                }
            }
        }

        &--Image {
            width: 100%;
            padding-top:100%;
            max-height: 500px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
`;

export const RecipeHeader = styled.div``;
export const RecipeIngredients = styled.div``;