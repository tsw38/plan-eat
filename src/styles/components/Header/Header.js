import styled from 'styled-components';

import {elevate} from 'styles/mixins/index';
import {blueFrance, ballerina, stormPetrel} from 'styles/colors';
import {layoutmd, spacingsm} from 'styles/sizing';
import {border} from 'styles/variables';
import {lighten} from 'polished';

export const Header = styled.header`
    border-bottom: ${border};
    background-color: white;
    max-height: ${layoutmd};
	grid-area: header;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas: 'search inbox profile';
    grid-template-columns: 1fr ${layoutmd} ${layoutmd};
    ${elevate('Raised')}

    .Link--active svg {
        fill: ${blueFrance};

        &:hover {
            fill: ${lighten(0.2, blueFrance)};
        }
    }
`;

export const HeaderBox = styled.div`
    border-left: ${border};

    a {
        display: block;
    }

    .Icon {
		fill: ${ballerina};
		padding: ${spacingsm};

        &:hover {
            fill: ${stormPetrel};
        }
	}
`;
