import styled from 'styled-components';

import {layoutxs} from '../sizing';

export const Page = styled.div`
    &.Page {
        height: calc(100vh - 3rem);
        overflow-y: scroll;
        display: flex;

        > [role="group"],
        > div {
            width:100%;
        }

        &--Signin {
            justify-content: center;
        }
    }
`;
