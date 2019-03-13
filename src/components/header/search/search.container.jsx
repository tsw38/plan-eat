import React from "react";

import Icon from 'components/common/Icon/Icon';

import {Search as StyledSearch} from "styles/components/containers/Header/Search";

export default () => {
    return (
    <StyledSearch>
        <Icon name="search" />
    </StyledSearch>
    );
}