import styled from 'styled-components';
import {elevate} from 'styles/mixins/index';

import {spacingxs, spacingmd, spacinglg, layoutxs} from 'styles/sizing';

import {grey40} from 'styles/colors';


export const Section = styled.section`
    padding: ${spacingxs};
    background-color:white;
    border: 1px solid ${grey40};
    margin-bottom: ${spacingmd};

    > * {
        margin: ${spacingxs};
    }
`;