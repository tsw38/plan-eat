import React from "react";

import Search from 'components/containers/Header/Search';
import Inbox from 'components/containers/Header/Inbox';
import Profile from 'components/containers/Header/Profile';

import {Header as StyledHeader} from "styles/components/containers/Header/Header";

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Search />
        <Inbox />
        <Profile />
      </StyledHeader>
    );
  }
}

export default Header;
