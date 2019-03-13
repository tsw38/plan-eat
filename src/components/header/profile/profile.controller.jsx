import React from "react";
import {connect} from 'react-redux';
import { navigate } from "@reach/router";

import { signOut } from 'actions/AccountActions';

import ProfileContainer from 'components/header/profile/profile.container';

class Profile extends React.Component {
    handleClick = () => {
        const {
            user,
            signOut
        } = this.props;

        return user.uid ? signOut() : navigate('/signin');
    }

    render() {
        return (
            <ProfileContainer
                user={this.props.user}
                handleClick={this.handleClick}
            />
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