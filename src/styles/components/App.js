import styled from 'styled-components';
import { Router } from "@reach/router";

export const App = styled.div`
    display: grid;
    grid-template-areas:
        "sidebar header"
        "sidebar body";
    grid-template-rows: 3rem 1fr;
    grid-template-columns: 12rem 1fr;
    height: 100vh;
    max-height: 100vh;
    width:  100vw;
    max-width: 100vw;
`;

export const StyledRouter = styled(Router)`
    grid-area: body;
`;