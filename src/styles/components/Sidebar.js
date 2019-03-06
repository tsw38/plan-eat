import styled from 'styled-components';
import {elevate} from 'styles/mixins/index';

import {spacing2xs, spacingxs, spacingmd, spacinglg, layoutxs} from 'styles/sizing';

import {white, fuelTown, blueFrance, joustBlue} from 'styles/colors';

import {border} from 'styles/variables';

import Link from 'common/Link/Link';



export const Sidebar = styled.aside`
    grid-area: sidebar;
    border-right:${border};
    background-color: ${white};
    width: 100%;
    ${elevate('Raised')}

    .Link--Sitename {
        font-size: ${spacinglg};
        font-family: 'Domine';
        font-weight: 700;
        display: block;
        line-height: 3rem;
        width: 100%;
        text-align: center;
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
                color: ${joustBlue};
            }
        }
    }
`;



