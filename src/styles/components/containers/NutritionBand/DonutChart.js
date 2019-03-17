import styled from 'styled-components';


export const StyledDonutChart = styled.div`
    &.DonutChart {
        height: inherit;

        svg {
            transform-origin: 50% 50%;
            transform: rotateY(180deg) rotatez(-90deg);
        }
    }
`;