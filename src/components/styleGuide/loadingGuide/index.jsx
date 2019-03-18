import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { setLoader } from 'actions/AppActions';

import Button from 'components/common/button';
import Loading from "components/common/loading";
import Row from 'components/styleGuide/loadingGuide/loadingGuide.styles';
import Section from 'components/styleGuide/notificationGuide/notificationGuide.styles';

class Loader extends React.Component {

	render() {
        return (
            <React.Fragment>
                <Section>
                    <h2>Inline</h2>
                    <p>Inline Loading spinners are used when performing actions. They help notify users that their action is being processed.</p>
                    <Row style={{height: '100px'}}>
                        <Loading />
                    </Row>

                    <Row style={{height: '20px'}}>
                        <Loading />
                    </Row>

                    <Row>
                        <h3>this is to show that it will conform to the height of the container</h3>
                        <Loading />
                    </Row>
                </Section>

                <Section>
                    <h2>Loading</h2>
                    <p>Loading spinners are used when retrieving data or performing slow computations, and help to notify users that loading is underway.</p>

                    <Row>
                        <Button className="Button--Primary"
                            onClick={() => this.props.setLoader(!this.props.isLoading)}>
                            Full Page Loader
                        </Button>
                    </Row>
                </Section>
            </React.Fragment>
        );
    }
};

const mapStateToProps = ({app}, ownProps) => ({
    isLoading: app.loading
});

const mapDispatchToProps = {
    setLoader
};

Loader.defaultProps = {
};

Loader.propTypes = {
    isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Loader);