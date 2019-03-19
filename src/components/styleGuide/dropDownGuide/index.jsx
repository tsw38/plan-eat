import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Row from 'components/common/Layout/Row';
import { DropDown, MultiSelect } from 'components/common/dropDown';
import Section from 'components/styleGuide/notificationGuide/notificationGuide.styles';

class Dropdown extends React.Component {

	render() {
        return (
            <React.Fragment>
                <Section>
					<h2>Dropdown</h2>
					<p>Dropdowns present a list of options that can be used to filter existing content</p>
					<Row>
						<DropDown
							name={"Test"}
							label={"Test"}
							value={"test"}
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
					<h2>Dropdown (Up)</h2>
				</Section>

				<Section>
					<h2>Multi-select Dropdown</h2>
					<Row>
						<MultiSelect
							title={"Test"}
							label={"Test"}
							placeholder={'Filter'}
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
					<h2>Inline Multi-select Dropdown</h2>
				</Section>

				<Section style={{backgroundColor: 'white'}}>
					<h2>Filter Dropdown</h2>

					<Row>
						<MultiSelect
							name={"Test"}
							label={"Multiselect Filter"}
							filterable={true}
							placeholder={'Filter'}
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
					<h2>Filter Dropdown Light</h2>

					<Row>
						<MultiSelect
							name={"Test"}
							label={"Multiselect Filter"}
							filterable={true}
							light={true}
							placeholder={'Filter'}
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
            </React.Fragment>
        );
    }
};

const mapStateToProps = ({app}, ownProps) => ({
    isLoading: app.loading
});

const mapDispatchToProps = {
};

Dropdown.defaultProps = {
};

Dropdown.propTypes = {
    isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);