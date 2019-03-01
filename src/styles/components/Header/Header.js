import styled from 'styled-components';
import {elevate} from '../../mixins/index';
import {white, azureRadiance, malibu} from '../../colors';

import {layoutmd, spacingsm} from 'styles/sizing';

import {border} from 'styles/variables';

import {geyser,	submarine} from 'styles/colors';

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

    .Link--active svg {
        fill: ${azureRadiance};

        &:hover {
            fill: ${malibu};
        }
    }
`;

export const HeaderBox = styled.div`
    border-left: ${border};

    a {
        display: block;
    }

    .Icon {
		fill: ${geyser};
		padding: ${spacingsm};

        &:hover {
            fill: ${submarine};
        }
	}
`;
