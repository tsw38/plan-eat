import React from "react";
import styled from 'styled-components';

import {Section} from 'styles/components/Section';
import { layout2xl, spacing3xs} from 'styles/sizing';

import {fontLight} from 'styles/variables';

import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

const ColorWrapper = styled.div`
    min-height:${layout2xl};
    display: flex;
    flex-direction: row;
    border: none;
    word-wrap: break-word;
    flex: 1;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-weight: ${fontLight};
    /* margin: 0.5rem; */
    padding: 0.5rem;
    flex:0;
    color: transparent;

    &:hover {
        color: white;
        text-shadow: 1px 1px 1px ${monochromes.grey60};
    }

    ${({color}) => ({
        backgroundColor: colors[color]
    })}
`;



export default () => {
	return (
		<React.Fragment>
            <Section>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(100px, calc(100%/3)))',
                    gridGap: spacing3xs
                }}>
                    {Object.keys(polychromes).map((colorName, index) => {
                        return (
                            <ColorWrapper key={index} color={colorName}>{colorName}</ColorWrapper>
                        )
                    })}
                </div>
            </Section>

            <Section>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, minmax(100px, calc(100%/5)))',
                    gridGap: spacing3xs
                }}>
                    {Object.keys(monochromes).map((colorName, index) => {
                        return (
                            <ColorWrapper key={index} color={colorName}>{colorName}</ColorWrapper>
                        )
                    })}
                </div>
            </Section>
        </React.Fragment>
	);
}

