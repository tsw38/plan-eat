import styled from 'styled-components';
import {elevate} from '../mixins/index';

import {spacing2xs, spacingxs, spacingmd, layoutmd, layoutxs} from '../sizing';

import {white, nevada, azureRadiance, malibu} from '../colors';

import {border} from '../variables';

export const Sidebar = styled.aside`
    grid-area: sidebar;
    border-right:${border};
    padding-top: ${layoutmd};
    background-color: ${white};
    width: 100%;
    ${elevate('Raised')}
`;

export const LinkWrapper = styled.ul`
    padding-left: ${layoutxs};
    padding-top: ${layoutxs};
    &:first-of-type {
        border-top: ${border};
    }
`;

export const StyledLink = styled.li`
    margin-bottom: ${spacingxs};

    .Link {
        cursor:pointer;
        display: block;
        padding: ${spacingxs} ${spacingmd};
        color: ${nevada};
        text-decoration: none;

        &:hover {
            color: ${azureRadiance}
        }

        &--active {
            color: ${azureRadiance};
            border-right: ${spacing2xs} solid ${azureRadiance};

            &:hover {
                color: ${malibu};
            }
        }
    }
`;



