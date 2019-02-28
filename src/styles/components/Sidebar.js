import styled from 'styled-components';
import {elevate} from '../mixins/index';

import {spacingmd, layoutmd} from '../spacing';

import {white, geyser, nevada, outerSpace} from '../colors';


export const Sidebar = styled.aside`
    grid-area: sidebar;
    border-right:1px solid ${geyser};
    padding-top: ${layoutmd};
    background-color: ${white};
    width: 100%;
    ${elevate('Raised')}
`;

export const LinkWrapper = styled.ul`
    &:first-of-type {
        border-top: 1px solid ${geyser};
    }
`;

export const StyledLink = styled.li`
    .Link {
        cursor:pointer;
        display: block;
        padding: ${spacingmd};
        color: ${outerSpace};

        &:hover {
            color: ${nevada}
        }
    }
`;



