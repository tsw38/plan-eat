import styled from 'styled-components';

import {elevate} from 'styles/mixins/index';
import * as space from 'styles/sizing';

import {monochromes} from 'styles/colors';

export const CalendarBand = styled.div`
    height:  ${space.spacingxl};
    width: 100%;
    background-color: ${monochromes.grey20};
    display: grid;
    grid-template-columns: ${space.spacingxl} auto ${space.spacingxl};
    ${elevate('Raised')}

    .Icon--Wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        :hover {
            background-color: white;

            svg {
                fill: black;
            }
        }

        &:first-of-type {
            svg {
                margin-left: -0.25rem;
            }
        }
        &:last-of-type {
            svg {
                margin-right: -0.25rem;
            }
        }
    }

    svg {
        max-height: 0.75rem;
        fill: white;
    }
`;

export const DatesWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;