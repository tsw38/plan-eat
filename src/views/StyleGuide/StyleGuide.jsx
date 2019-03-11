import React from "react";

import ColorGuide from 'views/StyleGuide/ColorGuide';
import TagGuide from 'views/StyleGuide/ButtonsGuide/Tags';
import ButtonGuide from 'views/StyleGuide/ButtonsGuide/Buttons';
import SmallButtonGuide from 'views/StyleGuide/ButtonsGuide/Small';

import * as colors from 'styles/colors';

import {border} from 'styles/variables';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class StyleGuide extends React.Component {
    render() {
        return (
            <div className="StyleGuide">
                <Tabs
                    onSelect={index => console.log(index)}
                    className="Tab">
                    <TabList className="Tab--Header">
                        <Tab><span>Colors</span></Tab>
                        <Tab><span>Buttons</span></Tab>
                        <Tab><span>Small Buttons</span></Tab>
                        <Tab><span>Tags</span></Tab>
                    </TabList>

                    <TabPanel>
                        <ColorGuide />
                    </TabPanel>
                    <TabPanel>
                        <ButtonGuide />
                    </TabPanel>
                    <TabPanel>
                        <SmallButtonGuide />
                    </TabPanel>
                    <TabPanel>
                        <TagGuide />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default StyleGuide;