import React from 'react';

import Icon from 'components/common/Icon/Icon';

import {Search as StyledSearch} from 'components/header/search/search.styles';

export default () => {
    return (
    <StyledSearch>
        <Icon name="search" />
    </StyledSearch>
    );
}