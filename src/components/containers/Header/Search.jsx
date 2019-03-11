import React from "react";

import {Search as StyledSearch} from "styles/components/Header/Search";

import Icon from 'components/common/Icon/Icon';

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
