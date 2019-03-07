import React from 'react';
import PropTypes from 'prop-types';
import objectPath from 'object-path';
import {connect} from 'react-redux';
import classNames from 'classnames';

import Icon from "common/Icon/Icon";

// import {MODAL_STYLES, MODAL_STYLES_DIALOG, MODAL_STYLES_DRAWER, MODAL_STYLES_MENU} from 'config/ModalConfig';
import {StyledModal} from 'styles/common/Modal';

import {initialize, toggleModal} from 'actions/ModalActions';

// import canUseDom from 'utils/canUseDom';
// import {setScroll} from 'utils/scrolling';
// import {getStateInfo} from 'utils/StateInfo';

class ModalGeneric extends React.Component {
	componentDidMount() {
		const {
			modalId,
			initialize,
			toggleModal
		} = this.props;

		initialize(modalId);
	}

	componentWillReceiveProps(nextProps) {
		console.warn(nextProps);
	}

	componentDidUpdate(prevProps) {}

	componentWillUnmount() {
		this.handleClose();
	}

	handleClose = (e) => {
		const {
			modalId,
			toggleModal
		} = this.props;

		if (e) {
			e.preventDefault();
		}

		toggleModal(modalId);
	}

	render() {
		const {
			type,
			label,
			heading,
			children,
			modalIsOpen
		} = this.props;

		return (
			<StyledModal
				className={classNames(
                    'Modal',
                    `Modal--${type}`
				)}
				overlayClassName="Modal--Overlay"
                isOpen={modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.handleClose}
				ariaHideApp={false}>
				<div className="Modal--Header">
					{label &&
						<p className="Modal--Header-Label">{label}</p>
					}
					{heading &&
						<p className="Modal--Header-Heading">{heading}</p>
					}
					<button className="Modal--Header-Close" onClick={this.handleClose}>
						<Icon
							name={'times'}
						/>
					</button>
				</div>
				<div className="Modal--Content">{children}</div>
				{!(/passive/i).test(type) &&
					<div className="Modal--Footer"></div>
				}
			</StyledModal>
		);
	}
}

const mapStateToProps = ({modals}, props) => {
	return {
		modalIsOpen: !!objectPath.get(modals.modals, props.modalId)
	};
};

const mapDispatchToProps = {
	initialize,
	toggleModal
};

ModalGeneric.defaultProps = {
	type: 'Primary',
	modalIsOpen: false
};

ModalGeneric.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	heading: PropTypes.string,
	children: PropTypes.element,
	modalIsOpen: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGeneric);
