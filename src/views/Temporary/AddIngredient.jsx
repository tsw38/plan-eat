import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { navigate } from "@reach/router"

import {stateChange} from 'utils/object';

import AddIngredientForm from 'components/Form/AddIngredient';

import { StyledSignin } from 'styles/views/Signin';

import Modal from 'common/Modal/ModalGeneric';

import Config from 'config/ModalsConfig';

class Signin extends React.Component {
    state = {
        render: false
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.setState({
            render: true
        })
    }

    componentDidUpdate(prevProps) {
        // const thisUser = this.props.user;
        // const oldUser = prevProps.user;

        // const userState = stateChange(oldUser, thisUser);

        // console.warn(oldUser.uid, thisUser.uid, userState);

        // if (userState.defined) {
        //     if (
        //         (!thisUser.uid && userState.changed)
        //         // || (!thisUser.uid && !oldUser.uid && !userState.changed)
        //     ) {
        //         this.setState({
        //             render: true
        //         })
        //     }
        //     if (thisUser.uid) {
        //         navigate('/')
        //     }
        //     // if (!thisUser.uid) {
        //     //     this.setState({
        //     //         render: true
        //     //     })
        //     // }
        // } else {
        //     // navigate('/')
        // }
    }


    render() {
        const {
            render
        } = this.state;

        return render && (
            <StyledSignin>
                <Modal
                    modalId={Config.ADD_INGREDIENT_MODAL.id}
                    render={{
                        form: true
                    }}
                    type={Config.ADD_INGREDIENT_MODAL.type}
                    heading={Config.ADD_INGREDIENT_MODAL.heading}>
                    <AddIngredientForm
                        render={{
                            title: false,
                            modal: Config.ADD_INGREDIENT_MODAL.id
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
