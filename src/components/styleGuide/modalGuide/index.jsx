import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {AlertConstants as AC} from 'constants';

import { injectModal } from 'actions/ModalActions';

import Config from 'config/ModalsConfig';

import Modal from 'components/common/modal';
import Row from 'components/common/Layout/Row';
import Section from 'components/styleGuide/notificationGuide/notificationGuide.styles';

class Modals extends React.Component {
    render () {
        const {
            injectModal
        } = this.props;

        return (
            <React.Fragment>
                <Section>
                    <h2>Passive</h2>
                    <p>This Modal is used as a style of notifications. We highly discourage the use of this, due to its disruptive nature. Passive Modal notifications should only appear if there is an action the user needs to address immediately. Passive Modal notifications are persistent on-screen. That is, they do not automatically go away after appearing. Users must either engage with or dismiss the notification.</p>
                    <Row>
                        <button
                            className="Button Button--Secondary"
                            onClick={() => injectModal({
                                modalId: Config.GLOBAL.passive.id,
                                content: {
                                    heading: "Modal Heading",
                                    label: "Optional Label",
                                    Body: (
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.</p>
                                    )
                                }
                            })}>
                            Open Passive Modal
                        </button>
                    </Row>
                </Section>
                <Section>
                    <h2>Transactional</h2>
                    <p>Transactional Modals are used to validate user decisions or to gain secondary confirmation from the user. Typically, the Modal requests either a 'yes' or 'no' response.</p>
                    <Row>
                        <button
                            className="Button Button--Primary"
                            onClick={() => injectModal({
                                modalId: Config.GLOBAL.transactional.id,
                                content: {
                                    heading: "Transactional Modal Heading",
                                    label: "Optional Transaction Label",
                                    Body: (
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.</p>
                                    ),
                                    buttons: {
                                        Primary: {
                                            text: "Primary Button",
                                            onClick: () => {console.log('do this on click')}
                                        },
                                        Secondary: {
                                            text: "Secondary Button",
                                            onClick: () => {console.log('do this on click')}
                                        }
                                    }
                                }
                            })}>
                            Open Transactional Modal
                        </button>
                    </Row>
                </Section>
                <Section>
                    <h2>Danger</h2>
                    <p>The same as a transactional or passive modal but to show cautionary user action.</p>
                    <Row>
                        <button
                            className="Button Button--Primary--Danger"
                            onClick={() => injectModal({
                                modalId: Config.GLOBAL.danger.id,
                                content: {
                                    heading: "Danger Modal Heading",
                                    label: "Optional Danger Label",
                                    Body: (
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.</p>
                                    ),
                                    buttons: {
                                        Primary: {
                                            text: "Primary Button",
                                            onClick: () => {console.log('do this on click')}
                                        },
                                        Secondary: {
                                            text: "Secondary Button",
                                            onClick: () => {console.log('do this on click')}
                                        }
                                    }
                                }
                            })}>
                            Open Danger Modal
                        </button>
                    </Row>
                </Section>
            </React.Fragment>

        );
    }
};


const mapStateToProps = ({modals}, ownProps) => ({
    // isLoading: app.loading
});

const mapDispatchToProps = {
    injectModal
};

Modals.defaultProps = {
};

Modals.propTypes = {
    // isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals);