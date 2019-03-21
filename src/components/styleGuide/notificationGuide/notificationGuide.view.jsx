import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {AlertConstants as AC} from 'constants';

import { pushToast } from 'actions/ToastActions';

import Button from 'components/common/button';
import Row from 'components/common/Layout/Row';
import TabsComponent from 'components/common/Tabs/Tabs';
import ToastDark from 'components/styleGuide/notificationGuide/toast/dark';
import InlineDark from 'components/styleGuide/notificationGuide/inline/dark';
import ToastLight from 'components/styleGuide/notificationGuide/toast/light';
import InlineLight from 'components/styleGuide/notificationGuide/inline/light';
import Section from 'components/styleGuide/notificationGuide/notificationGuide.styles';

const notificationTypes = [AC.WARNING, AC.ERROR, AC.SUCCESS, AC.INFORMATION];

const NotificationGuide =  (props) => {
	return (
        <React.Fragment>
            <Section>
                <h2>Inline</h2>
                <p>Inline Notifications are persistent until the user dismisses them</p>
                <TabsComponent
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
            <Section>
                <h2>Toast in action</h2>
                <p>Toast Notifications automatically disappear after five seconds</p>
                <Button
                    type="button"
                    onClick={() => props.pushToast({
                        title: 'Sample toast',
                        subtitle: '',
                        body: 'This is some sample text',
                        scale: notificationTypes[Math.floor(Math.random()*notificationTypes.length)]
                    })}
                    className="Button--Primary">
                    Click to push notification
                </Button>
            </Section>
        </React.Fragment>

	);
};

const mapStateToProps = ({app}, ownProps) => ({
    isLoading: app.loading
});

const mapDispatchToProps = {
    pushToast
};

NotificationGuide.defaultProps = {
};

NotificationGuide.propTypes = {
    isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationGuide);