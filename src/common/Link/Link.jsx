import React from "react";
import classNames from 'classnames';

import * as LinkStyles from "../../styles/common/Link";

class CustomLink extends React.Component {
  render() {
	  const {
		  to,
		  children,
		  className,
		  isExternal
	  } = this.props;

    return (
		<LinkStyles.Link
			className={classNames(
				'Link',
				className
			)}
			to={to}>
			{children}
		</LinkStyles.Link>
    );
  }
}

export default CustomLink;
