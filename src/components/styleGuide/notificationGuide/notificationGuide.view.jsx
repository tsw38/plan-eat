import React from "react";

import TabsComponent from 'components/common/Tabs/Tabs';
import ToastDark from 'components/styleGuide/notificationGuide/toast/dark';
import InlineDark from 'components/styleGuide/notificationGuide/inline/dark';
import ToastLight from 'components/styleGuide/notificationGuide/toast/light';
import InlineLight from 'components/styleGuide/notificationGuide/inline/light';
import Section from 'components/styleGuide/notificationGuide/notificationGuide.styles';

export default () => {
	return (
        <React.Fragment>
            <Section>
                <h2>Inline</h2>
                <p>Inline Notifications are persistent until the user dismisses them</p>
                <TabsComponent
                    defaultIndex={1}
                    panels={[
                        {
                            name: 'Light',
                            Component: InlineLight
                        },
                        {
                            name: 'Dark',
                            Component: InlineDark
                        }
                    ]}
                />
            </Section>

            <Section>
                <h2>Toast</h2>
                <p>Toast Notifications automatically disappear after five seconds</p>
                <TabsComponent
                    defaultIndex={1}
                    panels={[
                        {
                            name: 'Light',
                            Component: ToastLight
                        },
                        {
                            name: 'Dark',
                            Component: ToastDark
                        }
                    ]}
                />
            </Section>
        </React.Fragment>

	);
};