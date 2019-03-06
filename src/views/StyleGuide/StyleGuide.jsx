import React from "react";
import styled from 'styled-components';

import Button from "common/Button/Button";

import * as colors from 'styles/colors';
import {Section} from 'styles/components/section';
import {border} from 'styles/variables';


class StyleGuide extends React.Component {
    render() {
        return (
            <div className="StyleGuide">
                <Section>
                    <h1>Colors</h1>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, minmax(100px, calc(100%/4)))',
                        gridGap: '1rem'
                    }}>
                        <ColorWrapper color="jigglypuff">jigglypuff</ColorWrapper>
                        <ColorWrapper color="lotusPink">lotusPink</ColorWrapper>
                        <ColorWrapper color="casandora">casandora</ColorWrapper>
                        <ColorWrapper color="dragonSkin">dragonSkin</ColorWrapper>
                        <ColorWrapper color="pastelRed">pastelRed</ColorWrapper>
                        <ColorWrapper color="amour">amour</ColorWrapper>
                        <ColorWrapper color="megaMan">megaMan</ColorWrapper>
                        <ColorWrapper color="cyanite">cyanite</ColorWrapper>
                        <ColorWrapper color="carribean">carribean</ColorWrapper>
                        <ColorWrapper color="mountainMeadow">mountainMeadow</ColorWrapper>
                        <ColorWrapper color="jadeDust">jadeDust</ColorWrapper>
                        <ColorWrapper color="aquaVelvet">aquaVelvet</ColorWrapper>
                        <ColorWrapper color="joustBlue">joustBlue</ColorWrapper>
                        <ColorWrapper color="blueFrance">blueFrance</ColorWrapper>
                        <ColorWrapper color="nasaPurple">nasaPurple</ColorWrapper>
                        <ColorWrapper color="bluebell">bluebell</ColorWrapper>
                        <ColorWrapper color="white">white</ColorWrapper>
                        <ColorWrapper color="ballerina">ballerina</ColorWrapper>
                        <ColorWrapper color="stormPetrel">stormPetrel</ColorWrapper>
                        <ColorWrapper color="fuelTown">fuelTown</ColorWrapper>
                        <ColorWrapper color="imperialPrimer">imperialPrimer</ColorWrapper>
                    </div>
                </Section>

                <Section>
                    <h1>Buttons</h1>
                    <Button className="Button--Primary">
                        .Button--Primary
                    </Button>

                    <Button className="Button--Disabled Button--Primary">
                        .Button--Disabled.Button--Primary
                    </Button>

                    <Button className="Button--Secondary">
                        .Button--Secondary
                    </Button>

                    <Button className="Button--Disabled Button--Secondary">
                        .Button--Disabled.Button--Secondary
                    </Button>

                    <Button className="Button--Tertiary--Full">
                        .Button--Tertiary--Full
                    </Button>

                    <Button className="Button--Tertiary">
                        .Button--Tertiary
                    </Button>

                    <Button className="Button--Disabled Button--Tertiary--Full">
                        .Button--Disabled.Button--Tertiary--Full
                    </Button>

                    <Button className="Button--Disabled Button--Tertiary">
                        .Button--Disabled.Button--Tertiary--Full
                    </Button>

                    <Button className="Button--Primary--Danger">
                        .Button--Primary--Danger
                    </Button>

                    <Button className="Button--Secondary--Danger">
                        .Button--Secondary--Danger
                    </Button>

                    <Button className="Button--Disabled Button--Primary--Danger">
                        .Button--Disabled.Button--Primary--Danger
                    </Button>

                    <Button className="Button--Disabled Button--Secondary--Danger">
                        .Button--Disabled.Button--Secondary--Danger
                    </Button>
                </Section>

                <Section>
                    <h1>Small Buttons</h1>
                    <Button className="Button--Primary Button--Small">
                        .Button--Primary.Button--Small
                    </Button>

                    <Button className="Button--Disabled Button--Primary Button--Small">
                        .Button--Disabled.Button--Primary.Button--Small
                    </Button>

                    <Button className="Button--Secondary Button--Small">
                        .Button--Secondary.Button--Small
                    </Button>

                    <Button className="Button--Disabled Button--Secondary Button--Small">
                        .Button--Disabled.Button--Secondary.Button--Small
                    </Button>

                    <Button className="Button--Tertiary--Full Button--Small">
                        .Button--Tertiary--Full.Button--Small
                    </Button>

                    <Button className="Button--Tertiary Button--Small">
                        .Button--Tertiary.Button--Small
                    </Button>

                    <Button className="Button--Disabled Button--Tertiary--Full Button--Small">
                        .Button--Disabled.Button--Tertiary--Full.Button--Small
                    </Button>

                    <Button className="Button--Disabled Button--Tertiary Button--Small">
                        .Button--Disabled.Button--Tertiary--Full.Button--Small
                    </Button>

                    <Button className="Button--Primary--Danger Button--Small">
                        .Button--Primary--Danger.Button--Small
                    </Button>

                    <Button className="Button--Secondary--Danger Button--Small">
                        .Button--Secondary--Danger.Button--Small
                    </Button>

                    <Button className="Button--Disabled Button--Primary--Danger Button--Small">
                        .Button--Disabled.Button--Primary--Danger.Button--Small
                    </Button>

                    <Button className="Button--Disabled Button--Secondary--Danger Button--Small">
                        .Button--Disabled.Button--Secondary--Danger.Button--Small
                    </Button>
                </Section>

                <Section>
                    <h1>Tags</h1>
                    <Button className="Button--Primary Button--Small Tag">
                        .Button--Primary.Button--Small.Tag
                    </Button>

                    <Button className="Button--Tertiary--Full Button--Small Tag">
                        .Button--Tertiary--Full.Button--Small.Tag
                    </Button>

                    <Button className="Button--Primary--Danger Button--Small Tag">
                        .Button--Primary--Danger.Button--Small.Tag
                    </Button>

                    <Button className="Button--Secondary Button--Small Tag">
                        .Button--Secondary.Button--Small.Tag
                    </Button>

                    <Button className="Button--Secondary Button--Small Tag">
                        .Button--Secondary.Button--Small.Tag
                    </Button>

                    <Button className="Button--Tertiary Button--Small Tag">
                        .Button--Tertiary.Button--Small.Tag
                    </Button>

                    <Button className="Button--Secondary--Danger Button--Small Tag">
                        .Button--Secondary--Danger.Button--Small.Tag
                    </Button>
                </Section>
            </div>
        );
    }
}

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


export default StyleGuide;
