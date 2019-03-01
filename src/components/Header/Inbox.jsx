import React from "react";

import {Inbox as StyledInbox} from "styles/components/Header/Inbox";

import Icon from 'common/Icon/Icon';
import Link from 'common/Link/Link';

class Inbox extends React.Component {
  render() {
    return (
      <StyledInbox>
        <Link
          to={'/inbox'}>
            <Icon
              name="mail-empty"
            />
        </Link>
      </StyledInbox>
    );
  }
}

export default Inbox;
