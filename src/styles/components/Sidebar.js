import styled from 'styled-components';
import {elevate} from 'styles/mixins/index';

import {spacing2xs, spacingxs, spacingmd, spacinglg, layoutxs} from 'styles/sizing';

import {fuelTown, blueFrance, ballerina} from 'styles/colors';

import {border, fontBold} from 'styles/variables';

import {lighten} from 'polished';

import {transition} from 'styles/mixins/index';


export const Sidebar = styled.aside`
    grid-area: sidebar;
    border-right:${border};
    background-color: white;
    width: 100%;
    padding-bottom: 1.5rem;
    overflow-y: auto;
    ${elevate('Raised')}

    .Link--Sitename {
        font-size: ${spacinglg};
        font-family: 'Domine';
        font-weight: ${fontBold};
        display: block;
        line-height: 3rem;
        width: 100%;
        text-align: center;
        ${transition()}

        :hover {
            background-color:${ballerina};
            color: white;
        }
    }

    .Link {
        font-weight: normal;
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



