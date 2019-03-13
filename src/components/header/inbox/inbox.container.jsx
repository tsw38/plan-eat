import React from "react";

import {Inbox as StyledInbox} from "components/header/inbox/inbox.styles";

import Icon from 'components/common/Icon/Icon';
import Link from 'components/common/Link/Link';

export default () => {
    return (
        <StyledInbox>
            <Link to={'/inbox'}>
                <Icon name="mail-empty" />
            </Link>
        </StyledInbox>
    );
}