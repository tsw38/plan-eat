import { createGlobalStyle } from 'styled-components';

import {
    ballerina,
    imperialPrimer
} from 'styles/colors';

import {
fontSize,
spacingsm,
spacingmd,
spacing2xs
} from 'styles/sizing';

import {fontBold} from 'styles/variables';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Domine:400,700|Roboto:300,400,700');
    ${'' /* font-family: 'Roboto', sans-serif; font-family: 'Domine', serif; */}
    html {
        font-size: ${fontSize};
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: ${imperialPrimer};
        font-size: ${spacingmd};
    }

    p {
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: ${fontBold};
    }

    h1 {

    }

    h2 {
        text-transform: uppercase;
        margin-bottom: ${spacingsm};
    }

    h3{}

    h4{}

    h5{}

    h6 {
        font-size: ${spacingmd};
        margin-bottom: ${spacing2xs};
    }

    .subtle {
        color: ${ballerina};
    }
`;