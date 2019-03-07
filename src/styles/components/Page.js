import styled from 'styled-components';

import {layoutxs} from '../sizing';

export const Page = styled.div`
    &.Page {
        height: calc(100vh - 3rem);
        overflow-y: scroll;
        padding: ${layoutxs};
        display: flex;

        &--Signin {
            justify-content: center;
            align-items: center;
        }
    }
`;
