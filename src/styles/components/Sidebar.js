import styled from 'styled-components';
import {geyser, submarine, nevada, outerSpace} from '../colors';
import {elevate} from '../mixins/index';

export const Sidebar = styled.aside`
    grid-area: sidebar;
    border-right:1px solid ${submarine};
    background-color: ${geyser};
    width: 100%;
    ${elevate('Raised')}
`;

export const LinkWrapper = styled.ul`
    margin-top: 3rem;
    padding-top: 3rem;
    border-top: 1px solid ${submarine};
`;



export const StyledLink = styled.li`
    .Link {
        cursor:pointer;
        display: block;
        padding: 1rem;
        color: ${outerSpace};

        &:hover {
            color: ${nevada}
        }
    }
`;



