import React from "react";
import {Helmet} from 'react-helmet';
import {Location} from '@reach/router';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {pathToPageTitle, pathToPageClass} from 'utils/url';

import * as PageStyles from "components/page/page.styles";


const PageComponent = ({page, onLocationChange, children}) => {
    const pageClass = pathToPageClass(location.pathname || '');

	return (
		<PageStyles.Page className={classNames(
            'Page',
            {[`Page--${pageClass}`]: !!pageClass}
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