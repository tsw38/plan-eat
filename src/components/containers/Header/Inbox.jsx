import React from "react";

import {Inbox as StyledInbox} from "styles/components/containers/Header/Inbox";

import Icon from 'components/common/Icon/Icon';
import Link from 'components/common/Link/Link';

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
