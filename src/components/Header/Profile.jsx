import React from "react";

import {Profile as StyledProfile} from "styles/components/Header/Profile";

import Icon from 'common/Icon/Icon';
import Link from 'common/Link/Link';

class Profile extends React.Component {
  render() {
    return (
      <StyledProfile>
        <Link
          to={'/profile'}>
            <Icon
              name="user-circle"
            />
        </Link>
      </StyledProfile>
    );
  }
}

export default Profile;
