import styled from 'styled-components';
import {elevate} from '../mixins/index';
import {white, geyser} from '../colors';

import {layoutmd} from '../sizing';

export const Header = styled.header`
	grid-area: header;
    background-color: ${white};
    border-bottom: 1px solid ${geyser};
    height: 100%;
    max-height: ${layoutmd};
    width: 100vw;
    ${elevate('Raised')}
`;
