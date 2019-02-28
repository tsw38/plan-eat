import React from "react";

import Search from './Search';
import Inbox from './Inbox';
import Profile from './Profile';

import {Header as StyledHeader} from "../../styles/components/Header/Header";
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
