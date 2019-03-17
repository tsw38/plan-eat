import React from "react";

import {AlertConstants as AC} from 'constants';

import Notification from "components/common/notification";

import Row from 'components/common/Layout/Row';

export default () => {
	return (
        <React.Fragment>
            <Row>
                <Notification
                    type={AC.INLINE}
                    scale={AC.INFORMATION}
                    title="Notification title"
                    subtitle="Subtitle text"
                    theme="dark"
                />
            </Row>

            <Row>
                <Notification
                    type={AC.INLINE}
                    scale={AC.ERROR}
                    title="Notification title"
                    subtitle="Subtitle text"
                    theme="dark"
                />
            </Row>

            <Row>
                <Notification
                    type={AC.INLINE}
                    scale={AC.SUCCESS}
                    title="Notification title"
                    theme="dark">
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
                    theme="dark"
                />
            </Row>
        </React.Fragment>

	);
};