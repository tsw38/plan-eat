import styled from 'styled-components';
import {elevate} from '../../mixins/index';
import {white, geyser} from '../../colors';

import {layoutmd} from '../../sizing';

import {border} from '../../variables';

export const Header = styled.header`
    border-bottom: ${border};
    background-color: ${white};
    max-height: ${layoutmd};
	grid-area: header;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas: 'search inbox profile';
    grid-template-columns: 1fr ${layoutmd} ${layoutmd};
    ${elevate('Raised')}
`;

export const HeaderBox = styled.div`
    border-left: ${border};
`;
