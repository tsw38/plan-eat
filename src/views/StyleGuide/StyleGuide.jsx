import React from "react";

import ColorGuide from 'views/StyleGuide/ColorGuide';
import TagGuide from 'views/StyleGuide/ButtonsGuide/Tags';
import ButtonGuide from 'views/StyleGuide/ButtonsGuide/Buttons';
import SmallButtonGuide from 'views/StyleGuide/ButtonsGuide/Small';

import * as colors from 'styles/colors';

import {border} from 'styles/variables';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TabsComponent from 'components/common/Tabs/Tabs';
class StyleGuide extends React.Component {
    render() {
        return (
            <div className="StyleGuide">
                <TabsComponent
                    panels={[
                        {
                            name: 'Colors',
                            Component: ColorGuide
                        },
                        {
                            'name': 'Buttons',
                            Component: ButtonGuide
                        },
                        {
                            name: 'Small Buttons',
                            Component: SmallButtonGuide
                        },
                        {
                            'name': 'Tags',
                            Component: TagGuide
                        }
                    ]}
                />
            </div>
        );
    }
}

export default StyleGuide;