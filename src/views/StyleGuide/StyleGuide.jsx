import React from "react";
import styled from 'styled-components';

import {ColorGuide} from 'views/StyleGuide/ColorGuide';

import TagsGuide from 'views/StyleGuide/ButtonsGuide/Tags';
import ButtonsGuide from 'views/StyleGuide/ButtonsGuide/Buttons';
import SmallButtonsGuide from 'views/StyleGuide/ButtonsGuide/Small';

import * as colors from 'styles/colors';

import {border} from 'styles/variables';

class StyleGuide extends React.Component {
    render() {
        return (
            <div className="StyleGuide">
                <ColorGuide/>
                <ButtonsGuide />
                <SmallButtonsGuide />
                <TagsGuide/>
            </div>
        );
    }
}

const ColorWrapper = styled.div`
    min-height:00px;
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


export default StyleGuide;
