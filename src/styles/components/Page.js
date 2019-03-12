import styled from 'styled-components';

import * as sizing from 'styles/sizing';
import * as colors from 'styles/colors';

export const Page = styled.div`
    &.Page {
        height: calc(100vh - ${sizing.layoutmd});
        overflow-y: scroll;
        display: flex;

        > [role="group"],
        > div {
            width:100%;
        }

        &--Signin {
            justify-content: center;
        }

        &--Recipe {
            background-color: ${colors.blackSqueeze};
            padding: ${sizing.layout2xs};
        }

        &--Style {
            padding: ${sizing.layout2xs};
        }
    }
`;
