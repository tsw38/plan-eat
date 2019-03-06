import React from "react";
import styled from 'styled-components';

import * as colors from 'styles/colors';
import {Section} from 'styles/components/section';
import {border} from 'styles/variables';

const ColorWrapper = styled.div`
    min-height:100px;
    display: flex;
    flex-direction: row;
    border: ${border};
    word-wrap: break-word;
    flex: 1;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-weight: 300;
    /* margin: 0.5rem; */
    padding: 0.5rem;
    flex:0;
    color: transparent;

    &:hover {
        color: white;
        text-shadow: 1px 1px 1px ${colors.fuelTown};
    }

    ${({color}) => ({
        backgroundColor: colors[color]
    })}
`;



export const ColorGuide = () => {
	return (
		<Section>
			<h1>Colors</h1>
			<div style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(4, minmax(100px, calc(100%/4)))',
				gridGap: '1rem'
			}}>
				{Object.keys(colors).map((colorName, index) => {
					return (
						<ColorWrapper key={index} color={colorName}>{colorName}</ColorWrapper>
					)
				})}
			</div>
		</Section>
	);
}

