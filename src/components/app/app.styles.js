import styled from 'styled-components';
import { Router } from '@reach/router';

import {transition} from 'styles/mixins';
import {layoutmd, layout3xl} from 'styles/sizing';

export const App = styled.div`
    display: grid;
    grid-template-areas:
        "sidebar header"
        "sidebar body";
    grid-template-rows: ${layoutmd} 1fr;
    grid-template-columns: ${layout3xl} 1fr;
    height: 100vh;
    max-height: 100vh;
    width:  100vw;
    max-width: 100vw;
    filter: blur(0);
    ${transition('Transition', 'ease-out')}

    &.App {
        &--Loading {
            filter: blur(4px);
        }
    }
`;

export const StyledRouter = styled(Router)`
    grid-area: body;
`;