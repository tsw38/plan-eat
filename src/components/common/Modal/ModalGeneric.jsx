import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import objectPath from 'object-path';

import Icon from "components/common/Icon/Icon";

import {StyledModal} from 'styles/common/Modal';

import {initialize, toggleModal} from 'actions/ModalActions';

class ModalGeneric extends React.Component {
	componentDidMount() {
		const {
			modalId,
			initialize
		} = this.props;

		initialize(modalId);
	}

	componentWillReceiveProps(nextProps) {
		// console.warn(nextProps);
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
			render,
			heading,
			children,
			modalIsOpen
		} = this.props;

		return (
			<StyledModal
				className={classNames(
                    'Modal',
					`Modal--${type}`,
					{[`Modal--Form`]: render.form}
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
	render: {},
	type: 'Primary',
	modalIsOpen: false
};

ModalGeneric.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	render: PropTypes.object,
	heading: PropTypes.string,
	children: PropTypes.element,
	modalIsOpen: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGeneric);
