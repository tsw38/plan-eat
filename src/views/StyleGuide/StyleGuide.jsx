import React from "react";

import ColorGuide from 'views/StyleGuide/ColorGuide';
import AltTagGuide from 'views/StyleGuide/AltTagGuide';
import TagGuide from 'views/StyleGuide/ButtonsGuide/Tags';
import ButtonGuide from 'views/StyleGuide/ButtonsGuide/Buttons';
import SmallButtonGuide from 'views/StyleGuide/ButtonsGuide/Small';

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
                        },
                        {
                            'name': 'Alt Tags',
                            Component: AltTagGuide
                        }
                    ]}
                />
            </div>
        );
    }
}

export default StyleGuide;