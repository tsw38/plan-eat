import React from 'react';

import Homepage from 'components/header/homepage';
import Inbox from 'components/header/inbox/inbox.container';
import Search from 'components/header/search/search.container';
import Profile from 'components/header/profile/profile.controller';

import {Header as StyledHeader} from 'components/header/header.styles';

export default () => {
    return (
        <StyledHeader>
            <Homepage />
            <Search />
            <Inbox />
            <Profile />
        </StyledHeader>
    );
}
