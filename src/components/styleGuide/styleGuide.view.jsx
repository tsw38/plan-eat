import React from "react";

import TagGuide from 'components/styleGuide/tagGuide/tag.view';
import AltTagGuide from 'components/styleGuide/tagGuide/tagAlt.view';
import ColorGuide from 'components/styleGuide/colorGuide/colorGuide.view';
import ButtonGuide from 'components/styleGuide/buttonGuide/buttonsPrimary.view';
import SmallButtonGuide from 'components/styleGuide/buttonGuide/buttonsSmall.view';
import NotificationGuide from 'components/styleGuide/notificationGuide/notificationGuide.view';

import TabsComponent from 'components/common/Tabs/Tabs';
class StyleGuide extends React.Component {
    render() {
        return (
            <div className="StyleGuide">
                <TabsComponent
                    defaultIndex={5}
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
                        },
                        {
                            'name': 'Notifications',
                            Component: NotificationGuide
                        }
                    ]}
                />
            </div>
        );
    }
}

export default StyleGuide;