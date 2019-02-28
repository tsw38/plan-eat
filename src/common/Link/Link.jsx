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
			target={isExternal ? '_blank' : '_self'}
			to={to}
			getProps={({ isCurrent }) => {
				// the object returned here is passed to the
				// anchor element's props
				return {
					className: classNames(
						'Link',
						className,
						{'Link--active': isCurrent},
					)
				}
			}}>
			{children}
		</LinkStyles.Link>
    );
  }
}

export default CustomLink;
