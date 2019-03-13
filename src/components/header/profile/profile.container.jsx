import React from "react";
import classNames from 'classnames';

import Row from 'components/common/Layout/Row';
import Icon from "components/common/Icon/Icon";
import Link from "components/common/Link/Link";
import Button from "components/common/Button/Button";

import {
    Info,
    Image,
    AccountDropDown,
    Profile as StyledProfile
} from "components/header/profile/profile.styles";

export default ({handleClick, user}) => {
    return !user ? null : (
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
                        handleClick={handleClick}>
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
};