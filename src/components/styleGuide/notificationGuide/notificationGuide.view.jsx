import React from "react";

import {AlertConstants as AC} from 'constants';

import * as colors from 'styles/colors';

import Notification from "components/common/notification";

import Row from 'components/common/Layout/Row';
import Section from 'components/styleGuide/notificationGuide/notificationGuide.styles';

export default () => {
	return (
        <React.Fragment>
            <Section>
                <h2>Inline</h2>
                <p>Inline Notifications are persistent until the user dismisses them</p>
                <Row>
                    <Notification
                        type={AC.INLINE}
                        scale={AC.INFORMATION}
                        title="Notification title"
                        subtitle="Subtitle text"
                    />
                </Row>

                <Row>
                    <Notification
                        type={AC.INLINE}
                        scale={AC.ERROR}
                        title="Notification title"
                        subtitle="Subtitle text"
                    />
                </Row>

                <Row>
                    <Notification
                        type={AC.INLINE}
                        scale={AC.SUCCESS}
                        title="Notification title">
                        <p>
                            Our goal is to become better at our craft and raise our collective knowledge by sharing experiences, best practices, what we have recently learned or what we are working on.
                        </p>
                    </Notification>
                </Row>
                <Row>
                    <Notification
                        type={AC.INLINE}
                        scale={AC.WARNING}
                        title="Notification title"
                        subtitle="Subtitle text"
                    />
                </Row>
            </Section>

            <Section>
                <h2>Toast</h2>
                <p>Toast Notifications automatically disappear after five seconds</p>

                <Row>
                    <Notification
                        type={AC.TOAST}
                        scale={AC.INFORMATION}
                        title="Notification title"
                        subtitle="Subtitle text"
                        disableTimeout={true}
                    />
                </Row>

                <Row>
                    <Notification
                        type={AC.TOAST}
                        scale={AC.ERROR}
                        title="Notification title"
                        subtitle="Subtitle text"
                        disableTimeout={true}
                    />
                </Row>

                <Row>
                    <Notification
                        type={AC.TOAST}
                        scale={AC.SUCCESS}
                        disableTimeout={true}
                        title="Notification title">
                        <p>
                            Our goal is to become better at our craft and raise our collective knowledge by sharing experiences, best practices, what we have recently learned or what we are working on.
                        </p>
                    </Notification>
                </Row>
                <Row>
                    <Notification
                        type={AC.TOAST}
                        scale={AC.WARNING}
                        disableTimeout={true}
                        title="Notification title"
                        subtitle="Subtitle text"
                    />
                </Row>
            </Section>
        </React.Fragment>

	);
};