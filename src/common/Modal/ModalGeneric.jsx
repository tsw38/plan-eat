import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
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
			initialize
		} = this.props;

		initialize(modalId);
	}

	componentWillReceiveProps(nextProps) {
		// const open = getStateInfo(this.props, nextProps, 'modal.open');

		// if (open.changed && nextProps.modal.open && nextProps.dialog) {
		// 	setScroll(0, 0);
		// }
	}

	componentDidUpdate(prevProps) {
		// const {
		// 	modal,
		// 	dialog
		// } = this.props;
		// const open = getStateInfo(prevProps, this.props, 'modal.open');

		// if (open.changed && !modal.open && !dialog) {
		// 	setScroll(0, prevProps.scrollTop);
		// }
	}

	componentWillUnmount() {
		// this.handleClose();
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
			children
			// aria,
			// site,
			// size,
			// menu,
			// modal,
			// dialog,
			// drawer,
			// styles,
			// heading,
			// modalId,
			// isMobile,
			// className,
			// closeable,
			// handleReturn,
			// contentLabel,
			// closeAriaLabel,
			// returnFocusAfterClose
		} = this.props;

		// if (canUseDom() && modal.open && (dialog || drawer || menu)) {
		// 	// const element = document.querySelector(dialog || menu ? '.c-header' : '.c-header__main');
		// 	// const elementHeight = element.offsetHeight + element.offsetTop;
		// 	// const config = menu ? MODAL_STYLES_MENU : dialog ? MODAL_STYLES_DIALOG : MODAL_STYLES_DRAWER;

		// 	// // under the selected element
		// 	// config.overlay.top = elementHeight;

		// 	// if (isMobile && dialog) {
		// 	// 	// so mobile can scroll to the bottom of the dialog
		// 	// 	MODAL_STYLES_DIALOG.overlay.maxHeight = 'calc(100% - ' + elementHeight.toString() + 'px)';
		// 	// }
        // }

		return (
			<StyledModal
				className={classNames(
                    'Modal',
                    `Modal--${type}`
				)}
				overlayClassName="Modal--Overlay"
                isOpen={true}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
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
		modalIsOpen: modals.modal[props.modalId]
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
