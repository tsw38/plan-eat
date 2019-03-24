
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    .ToastContainer {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 3rem;
        z-index: 100;
        right: 0.5rem;
        pointer-events: none;

        > * {
            pointer-events: all;
        }

        .Notification--toast {
            margin-bottom: 0;
            margin-top: 0.5rem;
        }
    }
`;