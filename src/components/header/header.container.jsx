import React from "react";

import Inbox from 'components/header/inbox/inbox.container';
import Search from 'components/header/search/search.container';
import Profile from 'components/header/profile/profile.controller';

import {Header as StyledHeader} from "styles/components/containers/Header/Header";

export default () => {
    return (
        <StyledHeader>
            <Search />
            <Inbox />
            <Profile />
        </StyledHeader>
    );
}
