import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';

import { suitify } from 'utils/string';

import {initialize, toggleModal} from 'actions/ModalActions';

import Icon from "components/common/Icon/Icon";

import {StyledModal} from 'components/common/modal/modal.styles';


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
            isOpen,
			render,
			heading,
            buttons,
            children,
        } = this.props;

		return (
			<StyledModal
				className={classNames(
                    suitify({
                        parent: 'Modal',
                        variant: type
                    }),
					{[`Modal--Form`]: render.form}
				)}
				overlayClassName="Modal--Overlay"
                isOpen={isOpen}
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
				{!(/passive/i).test(type) && isOpen &&
					<div className="Modal--Footer">
                        {buttons.Secondary &&
                            <button
                                type="button"
                                onClick={buttons.Secondary.onClick}
                                className={classNames(
                                    'Button',
                                    'Button--Tertiary'
                                )
                            }>
                                {buttons.Secondary.text || 'Cancel'}
                            </button>
                        }
                        {buttons.Primary &&
                            <button
                                type="button"
                                onClick={buttons.Primary.onClick}
                                className={classNames(
                                    'Button',
                                    {'Button--Primary': (/transactional/i).test(type)},
                                    {'Button--Primary--Danger': (/danger/i).test(type)},
                                )
                            }>
                                {buttons.Primary.text || 'Submit'}
                            </button>
                        }
                    </div>
				}
			</StyledModal>
		);
	}
}

const mapStateToProps = ({modals}, props) => ({
});

const mapDispatchToProps = {
	initialize,
	toggleModal
};

ModalGeneric.defaultProps = {
	render: {},
	type: 'Primary',
	buttons: {}
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
