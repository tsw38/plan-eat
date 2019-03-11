import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { navigate } from "@reach/router"

import {stateChange} from 'utils/object';

import Config from 'config/ModalsConfig';

import SigninForm from 'components/common/Form/Signin';
import Modal from 'components/common/Modal/ModalGeneric';


import { StyledSignin } from 'styles/views/Signin';

class Signin extends React.Component {
    state = {
        render: false
    }

    componentWillMount() {

    }

    componentDidMount() {
        if (this.props.user.uid) {
            navigate('/');
        }
        // console.warn(this.props.user.uid === null);
        if (this.props.user.uid === null) {
            this.setState({
                render: true
            })
        }
    }

    componentDidUpdate(prevProps) {
        const thisUser = this.props.user;
        const oldUser = prevProps.user;

        const userState = stateChange(oldUser, thisUser);

        // console.warn(oldUser.uid, thisUser.uid, userState);

        if (userState.defined) {
            if (
                (!thisUser.uid && userState.changed)
                // || (!thisUser.uid && !oldUser.uid && !userState.changed)
            ) {
                this.setState({
                    render: true
                })
            }
            if (thisUser.uid) {
                navigate('/')
            }
            // if (!thisUser.uid) {
            //     this.setState({
            //         render: true
            //     })
            // }
        } else {
            // navigate('/')
        }
    }


    render() {
        const {
            render
        } = this.state;

        return render && (
            <StyledSignin>
                <Modal
                    modalId={Config.SIGN_IN_MODAL.id}
                    render={{
                        form: true
                    }}
                    type={Config.SIGN_IN_MODAL.type}
                    heading={Config.SIGN_IN_MODAL.heading}>
                    <SigninForm
                        render={{
                            title: false,
                            modal: Config.SIGN_IN_MODAL.id
                        }}/>
                </Modal>
            </StyledSignin>
        );
    }
}

const mapStateToProps = ({user}, props) => {
	return {
		user: user.account
	};
};

const mapDispatchToProps = {
	// initialize,
	// toggleModal
};

Signin.defaultProps = {
};

Signin.propTypes = {
	user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
