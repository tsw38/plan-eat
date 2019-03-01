import React from "react";

import Search from 'components/Header/Search';
import Inbox from 'components/Header/Inbox';
import Profile from 'components/Header/Profile';

import {Header as StyledHeader} from "styles/components/Header/Header";

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
