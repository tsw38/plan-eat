
import styled from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';

import * as colors from 'styles/colors';

export const StyledButton = styled.button`
    &.Button {
        &--${({colorName, inverted}) => inverted ? `${colorName}--Inverted` : colorName}{
            ${({colorName, inverted}) => colorButtons(colors[colorName], inverted)}
            :hover {
                ${({colorName, inverted}) => colorButtons(colors[colorName], !inverted)}
            }
        }

        &--Header {
            background-image: url(${({style}) => style && style.backgroundImage});
        }
    }
`;