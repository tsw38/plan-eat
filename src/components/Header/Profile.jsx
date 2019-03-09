import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { navigate } from "@reach/router";

import { signOut } from 'actions/AccountActions';

import Row from 'common/Layout/Row';
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
    handleOnClick = () => {
        const {
            user,
            signOut
        } = this.props;

        return user.uid ? signOut() : navigate('/signin');
    }

    render() {
        const {
            user,
            signOut
        } = this.props;

        return (
            <StyledProfile>
                <Button
                    className="Button--Header"
                    style={{backgroundImage: user.photoURL}}
                    onClick={() => {}}>
                    <Link
                        to="/account">
                        <Icon
                            className={classNames(
                                {'hidden': user.uid}
                            )}
                            name="user-circle">
                        </Icon>
                    </Link>

                    <AccountDropDown>
                        {user.uid &&
                            <Row className="Menu Menu--User">
                                <figure>
                                    <Image>
                                        <Link
                                            to="/account">
                                            <img
                                                src={user.photoURL}
                                                alt="user image"
                                            />
                                        </Link>
                                    </Image>

                                    <Info>
                                        <h6>{user.displayName}</h6>
                                        <p className="email">{user.email}</p>
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
                                {'Menu--Settings': !user.uid},
                                {'Menu--Signout': user.uid}
                            )}
                            handleClick={this.handleOnClick}>
                            {user.uid ? (
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
    user: user.account
});

const mapDispatchToProps = {
    signOut
};

Profile.defaultProps = {
};

Profile.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);