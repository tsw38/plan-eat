import React from "react";

import {Search as StyledSearch} from "styles/components/Header/Search";

import Icon from 'common/Icon/Icon';
import Link from 'common/Link/Link';

class Search extends React.Component {
  render() {
    return (
      <StyledSearch>
        <Icon
          name="search"
        />
      </StyledSearch>
    );
  }
}

export default Search;
