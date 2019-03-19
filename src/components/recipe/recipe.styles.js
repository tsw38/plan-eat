import styled from 'styled-components';

import {transition, colorButtons} from 'styles/mixins/index';
import {darken, lighten, parseToHsl, rgbToColorString} from 'polished';

import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';
import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

export const StyledRecipe = styled.div`
    &.Recipe {
        display: grid;
        grid-gap: ${sizing.spacingmd};
        grid-template-columns: calc(50% - ${sizing.spacingxs}) auto;
        padding-bottom: 2rem;
        width: 100%;
        max-width: calc(${sizing.layoutSoBig}*3 + ${sizing.spacingmd});

        ul, ol {
            margin-left: 1rem;
        }

        ol {
            list-style: decimal;
            list-style-position: inside;
        }

        li {
            margin-bottom: 1rem;
            line-height: 1.25;
        }

        .row {
            display: grid;
        }

        .column {
            width: 100%;
        }

        .Button {
            .Icon--Wrapper {
                height: ${sizing.spacingmdl};

                svg {
                    width: auto;
                }
            }
        }

        .Recipe--Section--Title {
            font-weight: ${variables.fontLight};
            font-size: ${sizing.spacingmdl};
            margin-left: 0;
            margin-right: 0;
            margin-bottom:1.5rem;
        }
    }

    .Recipe {

        &--Header {
            margin-bottom: 1.5rem;

            .Button {
                border: none;
                padding: ${sizing.spacing3xs};
            }
            .row {
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
        }

        &--Section {
            &:not(:last-of-type) {
                border-bottom: 1px solid ${colors.ballerina};
            }

            .row {
                grid-template-columns: auto auto;
                align-items: center;
            }

            .Recipe--Section-List {
                color: ${colors.stormPetrel};
            }
        }

        &--Serving-Toggle {
            display: grid;
            grid-template-rows: repeat(2,auto);
            grid-gap: 0.5rem;
            margin: 0 0 0 auto;

            .Toggle {
                display:grid;
                grid-template-columns: auto auto;
            }

            .Button {
                border-radius: 0;
                border: ${sizing.spacing3xs} solid ${colors.imperialPrimer};
                padding: 0.25rem;

                :first-of-type {
                    fill: ${colors.imperialPrimer};

                    &:hover {
                        ${colorButtons(colors.imperialPrimer)}
                        fill: white;
                    }
                }

                :last-of-type {
                    ${colorButtons(colors.imperialPrimer)}
                    fill: white;

                    &:hover {
                        ${colorButtons(darken(0.2, colors.imperialPrimer))}
                        fill: white;
                    }
                }

                .Icon--Wrapper {
                    height: 1rem;
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
            background-color: ${colors.stormPetrel};
        }

        &--Time {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            border-bottom: 1px solid ${colors.ballerina};
            padding: 0.5rem 0;

            h6 {
                color: ${colors.stormPetrel};
                font-weight: ${variables.fontLight};
                font-size: ${sizing.spacingsml};
                text-align: center;
            }

            > * {
                text-align: center;
                width: 100%;

                :first-child {
                    border-right: 1px solid ${colors.ballerina};
                }

                :last-child {
                    border-left: 1px solid ${colors.ballerina};
                }
            }
        }

        &--Nutrition {
            padding: 2rem 0 0;

            .Recipe--Section--Title {
                margin-bottom: 1rem;
            }

            &--Table {
                display: grid;
                grid-template-areas:
                    'Calories Sugar'
                    'Protein Fiber'
                    'Fats Carbs'
                ;
                grid-template-columns: 50% 50%;

                p {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.5rem 0;

                    &.Calories,
                    &.Protein,
                    &.Fat {
                        border-right: 1px solid ${colors.ballerina};
                        padding-right: 0.5rem;
                    }
                    &.Sugar,
                    &.Fiber,
                    &.Carbs {
                        border-left: 1px solid ${colors.ballerina};
                        padding-left: 0.5rem;
                    }

                    &.Protein,
                    &.Fiber {
                        border-top: 2px solid ${colors.ballerina};
                        border-bottom: 2px solid ${colors.ballerina};
                    }
                }
            }
        }

        &--Tags {
            padding: 2rem 0 0;

            .Button {
                user-select: none;
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
            }
        }
    }


`;

export const RecipeHeader = styled.div``;

export const RecipeSection = styled.div`
    &.Recipe--Section {
        margin-bottom: 0.75rem;
    }
`;