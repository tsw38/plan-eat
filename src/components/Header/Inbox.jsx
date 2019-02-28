import React from "react";

import {Inbox as StyledInbox} from "../../styles/components/Header/Inbox";

import CarbonSVG from '../../common/CarbonSVG/CarbonSVG';

class Inbox extends React.Component {
  render() {
    return (
      <StyledInbox>
        <img src="/images/add.svg"></img>
      </StyledInbox>
    );
  }
}

export default Inbox;
