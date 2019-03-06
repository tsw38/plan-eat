import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { azureRadiance, velencia } from "../colors";

const BUTTON_CONFIG = {
    ['Header']: () => `
        position:relative;
    `,
    ['Primary']: ({ theme }) => `
        background-color: ${azureRadiance};
    `,
    ['Primary-Small']: ({ theme }) => ``,
    ['Primary--Danger']: ({ theme }) => `
        background-color: ${velencia};
    `,
    ['Primary--Danger--Small']: ({ theme }) => ``,
    ['Secondary']: ({ theme }) => ``,
    ['Secondary-Small']: ({ theme }) => ``,
    ['Secondary--Danger']: ({ theme }) => ``,
    ['Secondary--Danger--Small']: ({ theme }) => ``,
    ['Tertiary']: ({ theme }) => ``,
    ['Tertiary--Small']: ({ theme }) => ``,
    ['Ghost']: ({ theme }) => ``,
    ['Ghost-Small']: ({ theme }) => ``,
};

export const StyledButton = styled.button`
    ${applyStyleModifiers(BUTTON_CONFIG)};
`;
