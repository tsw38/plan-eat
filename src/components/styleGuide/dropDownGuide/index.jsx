import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Row from 'components/common/Layout/Row';
import {Section} from 'styles/components/Section';
import { Dropdown, MultiSelect } from 'components/common/dropdown';

class DropdownGuide extends React.Component {

	render() {
        return (
            <React.Fragment>
                <Section>
					<h2>Dropdown</h2>
					<p>Dropdowns present a list of options that can be used to filter existing content</p>
					<Row>
						<Dropdown
							name={"Test"}
							label={"Test"}
							items={[
								{
									id: 'option-1',
									text: 'Option 1',
								},
								{
									id: 'option-2',
									text: 'Option 2',
								},
								{
									id: 'option-3',
									text: 'Option 3',
								},
								{
									id: 'option-4',
									text: 'Option 4',
								},
							]}
							className={"Test"}
						/>
					</Row>
                </Section>

                <Section>
					<h2>Dropdown With Sublists</h2>
					<Row>
						<Dropdown
							name={"Test"}
							label={"Test"}
							items={{
                                Ingredients: [
                                    {
                                        id: 'option-1',
                                        text: 'Option 1',
                                    },
                                    {
                                        id: 'option-2',
                                        text: 'Option 2',
                                    },
                                    {
                                        id: 'option-3',
                                        text: 'Option 3',
                                    },
                                    {
                                        id: 'option-4',
                                        text: 'Option 4',
                                    },
                                ],
                                Recipes: [
                                    {
                                        id: 'option-5',
                                        text: 'Option 5',
                                    }
                                ],
                                Users: [
                                    {
                                        id: 'option-6',
                                        text: 'Option 6',
                                    }
                                ]
                            }}
							className={"Test"}
						/>
					</Row>
                </Section>

				<Section>
					<h2>Filter Dropdown</h2>

					<Row>
                        <Dropdown
                            type={'filter'}
                            name={"Test"}
                            label={"Test"}
                            items={{
                                Ingredients: [
                                    {
                                        id: 'option-1',
                                        text: 'Option 1',
                                    },
                                    {
                                        id: 'option-2',
                                        text: 'Option 2',
                                    },
                                    {
                                        id: 'option-3',
                                        text: 'Option 3',
                                    },
                                    {
                                        id: 'option-4',
                                        text: 'Option 4',
                                    },
                                ],
                                Recipes: [
                                    {
                                        id: 'option-5',
                                        text: 'Option 5',
                                    },
                                    {
                                        id: 'joey-5',
                                        text: 'Joey',
                                    },
                                    {
                                        id: 'tyler-5',
                                        text: 'Tyler',
                                    }
                                ],
                                Users: [
                                    {
                                        id: 'option-6',
                                        text: 'Option 6',
                                    }
                                ]
                            }}
                            className={"Test"}
                        />
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
};

DropdownGuide.defaultProps = {
};

DropdownGuide.propTypes = {
    isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownGuide);