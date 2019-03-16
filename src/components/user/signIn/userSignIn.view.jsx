import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import objectPath from 'object-path';
import { navigate } from "@reach/router";

import { initialize } from 'actions/ModalActions';

import { stateChange} from 'utils/object';

import Config from 'config/ModalsConfig';

import Modal from 'components/common/modal';
import SigninForm from 'components/common/Form/Signin';


import { StyledSignin } from 'styles/views/Signin';

class Signin extends React.Component {
    state = {
        render: false
    }

    componentWillMount() {

    }

    componentDidMount() {
        const {
            user,
            initialize
        } = this.props;

        if (user.uid) {
            navigate('/');
        }
        // console.warn(this.props.user.uid === null);
        if (user.uid === null) {
            this.setState({
                render: true
            });
            initialize(Config.SIGN_IN_MODAL.id)
        }
    }

    componentDidUpdate(prevProps) {
        const thisUser = this.props.user;
        const oldUser = prevProps.user;

        const userState = stateChange(oldUser, thisUser);

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
                    isOpen={objectPath.get(this.props, 'modal.isOpen')}
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

const mapStateToProps = ({user, modals}, props) => {
	return {
        user: user.account,
        modal: objectPath.get(modals, Config.SIGN_IN_MODAL.id)
	};
};

const mapDispatchToProps = {
	initialize,
	// toggleModal
};

Signin.defaultProps = {
};

Signin.propTypes = {
	user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
