import React from "react";

import * as PageStyles from "../../styles/components/Page";

export default ({page, children}) => {
	return (
		<PageStyles.Page className={page}>
			{children}
		</PageStyles.Page>
	)
}