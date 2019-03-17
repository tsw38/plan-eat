
import styled from 'styled-components';
import {colorButtons} from 'styles/mixins/index';

import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

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