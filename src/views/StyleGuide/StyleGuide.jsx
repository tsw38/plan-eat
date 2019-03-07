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


export default StyleGuide;
