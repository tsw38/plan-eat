import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Row from 'common/Row/Row';
import Icon from "common/Icon/Icon";
import Link from "common/Link/Link";
import Button from "common/Button/Button";

import {
    Info,
    Image,
    AccountDropDown,
    Profile as StyledProfile
} from "styles/components/Header/Profile";

class Profile extends React.Component {
    render() {
        const {
            user
        } = this.props;

        return (
            <StyledProfile>
                <Button
                    className="Button--Header"
                    onClick={() => {}}>
                    <Link
                        to="/account">
                        <Icon name="user-circle" />
                    </Link>

                    <AccountDropDown>
                        {user.authenticated &&
                            <Row className="Menu Menu--User">
                                <figure>
                                    <Image>
                                        <Link
                                            to="/account">
                                            <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/32640616_10211979593140875_184923463356514304_o.jpg?_nc_cat=101&_nc_ht=scontent-sjc3-1.xx&oh=03d565d57634a01db0d91feb2cc4740b&oe=5D17FFC1" alt="user image" />
                                        </Link>
                                    </Image>

                                    <Info>
                                        <h6>Tyler Williams</h6>
                                        <p className="email">tyler.scott.14@gmail.com</p>
                                    </Info>
                                </figure>
                            </Row>
                        }
                        <Row className="Menu Menu--Settings">
                            <div className="row">
                                <Link
                                    className={classNames(
                                        'Link--Secondary',
                                        'Link--Ghost'
                                    )}
                                    to="/settings">
                                    Settings
                                </Link>
                            </div>
                            <div className="row">
                                <Link
                                    className={classNames(
                                        'Link--Secondary',
                                        'Link--Ghost'
                                    )}
                                    to="/help">
                                    Help
                                </Link>
                            </div>
                        </Row>
                        <Row
                            className={classNames(
                                'Menu',
                                {'Menu--Settings': !user.authenticated},
                                {'Menu--Signout': user.authenticated}
                            )}
                            onClick={() => {}}>
                            {user.authenticated ? (
                                <React.Fragment>
                                    <Icon name="power-off" />
                                    <span className="Link Link--Secondary Link--Ghost">Sign Off</span>
                                </React.Fragment>
                            ) : (
                                <div className="row">
                                    <Link
                                        className={classNames(
                                            'Link--Secondary',
                                            'Link--Ghost'
                                        )}
                                        to="/signin">
                                        Sign In
                                    </Link>
                                </div>
                            )}

                        </Row>
                    </AccountDropDown>
                </Button>
            </StyledProfile>
        );
    }
}

const mapStateToProps = ({user}, props) => ({
    user
});

const mapDispatchToProps = {
};

Profile.defaultProps = {
};

Profile.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);