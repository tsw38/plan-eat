import React from "react";
import {Helmet} from 'react-helmet';
import {Location} from '@reach/router';
import {pathToPageTitle} from 'utils/url';

import * as PageStyles from "styles/components/Page";

export default ({page, children}) => {
	return (
		<PageStyles.Page className={page}>
			<Location>
				{({location}) =>
					<Helmet title={pathToPageTitle(location.pathname || '')} />
				}
			</Location>

			{children}
		</PageStyles.Page>
	)
}