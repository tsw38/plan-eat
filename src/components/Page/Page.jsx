import React from "react";
import {Helmet} from 'react-helmet';
import {Location} from '@reach/router';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {pathToPageTitle} from 'utils/url';

import * as PageStyles from "styles/components/Page";



const PageComponent = ({page, onLocationChange, children}) => {
	return (
		<PageStyles.Page className={classNames(
            'Page',
            `Page--${page.split(/\s/)[0]}`
        )}>
			<Location>
                {({location}) => {
                    return (
                        <Helmet title={pathToPageTitle(location.pathname || '')} />
                    )
                }}
			</Location>

			{children}
		</PageStyles.Page>
	)
}



const mapStateToProps = (state, ownProps) => {
    // console.warn('maping state to prop', state)
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(PageComponent);