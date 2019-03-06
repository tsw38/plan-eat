import React from "react";
import classNames from 'classnames';
import { Link } from "@reach/router";
import PropTypes from 'prop-types';

class CustomLink extends React.Component {
    render() {
        const {
            to,
            children,
            universal,
            className,
            isExternal
        } = this.props;

        return (
            <Link
                target={isExternal ? '_blank' : '_self'}
                to={to}
                getProps={({ isCurrent }) => {
                    return {
                        className: classNames(
                            {'Link': universal},
                            {'Link--active': isCurrent},
                            className
                        )
                    }
                }}>
                {children}
            </Link>
        );
    }
}

CustomLink.defaultProps = {
    universal: true
}

CustomLink.propTypes = {
    to: PropTypes.string,
    universal: PropTypes.bool,
    isExternal: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
}

export default CustomLink;
