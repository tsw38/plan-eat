import styled from 'styled-components';
import {elevate, transition} from 'styles/mixins/index';

import {spacing2xs, spacingxs, spacingmd, layoutxs} from 'styles/sizing';

import {fuelTown, blueFrance} from 'styles/colors';

import {border} from 'styles/variables';

import {lighten} from 'polished';


export const Sidebar = styled.aside`
    grid-area: sidebar;
    border-right:${border};
    background-color: white;
    width: 100%;
    padding-bottom: 1.5rem;
    overflow-y: auto;
    margin-top: 3rem;
    position:relative;
    left: 0;
    ${transition()}
    ${elevate('Raised')}

    .Link {
        font-weight: normal;
    }

    &.Sidebar {
        &--Hidden {
            left: -12rem;
        }
    }
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
        color: ${fuelTown};
        text-decoration: none;

        &:hover {
            color: ${blueFrance}
        }

        &--active {
            color: ${blueFrance};
            border-right: ${spacing2xs} solid ${blueFrance};

            &:hover {
                color: ${lighten(0.2, blueFrance)};
            }
        }
    }
`;



