import styled, { createGlobalStyle } from 'styled-components';

import * as colors from 'styles/colors';

export const AlertStyling = styled.p`
    &.Alert {

        &--Error {
            color: ${colors.amour};
        }
    }
`;