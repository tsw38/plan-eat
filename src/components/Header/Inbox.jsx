import React from "react";

import {Inbox as StyledInbox} from "../../styles/components/Header/Inbox";

import CarbonSVG from '../../common/CarbonSVG/CarbonSVG';

class Inbox extends React.Component {
  render() {
    console.warn(process.env);
    return (
      <StyledInbox>
        <CarbonSVG
          type="carbon"
          className="add-glyph"
        />
      </StyledInbox>
    );
  }
}

export default Inbox;
