import React from 'react';

import Loading from "components/common/loading/loading";

export default ({isLoading}) => {
    return (
        <Loading type="full" render={isLoading} />
    );
}
