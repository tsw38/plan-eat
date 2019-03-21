import styled from 'styled-components';

import {elevate, transition} from 'styles/mixins/index';

import {brand, grey20, grey40} from 'styles/colors';
import * as sizing from 'styles/sizing';
import {border, fontBold} from 'styles/variables';
import {lighten} from 'polished';

export const Header = styled.header`
    border-bottom: ${border};
    background-color: white;
    max-height: ${sizing.layoutmd};
	grid-area: header;
    grid-column-start: 1;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas: 'sitename search inbox profile';
    grid-template-columns: 12rem 1fr ${sizing.layoutmd} ${sizing.layoutmd};
    ${elevate('Raised')}

    .Link--active svg {
        fill: ${brand};

        &:hover {
            fill: ${lighten(0.2, brand)};
        }
    }



    .Link--Sitename {
        font-size: ${sizing.spacinglg};
        font-family: 'Domine';
        font-weight: ${fontBold};
        display: block;
        line-height: 3rem;
        width: 100%;
        text-align: center;
        ${transition()}
        grid-area: sitename;
        border-right: ${border};

        :hover {
            background-color:${grey20};
            color: white;
        }
    }
`;

export const HeaderBox = styled.div`
    border-left: ${border};

    a {
        display: block;
    }

    /* svg.Icon:last-of-type {
        padding: 0;
    } */

    .Icon {
		fill: ${grey20};


        :last-of-type {
            padding: ${sizing.spacingsm};
        }

        &:hover {
            fill: ${grey40};
        }
	}
`;
