import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { suitify } from 'utils/string';

class CustomMultiSelect extends React.Component {
	render() {
		// const {
        //     type,
		// 	open,
		// 	items,
		// 	label,
		// 	light,
		// 	title,
		// 	onOpen,
		// 	onClose,
		// 	disabled,
        //     onChange,
		// 	className,
		// 	filterable,
		// 	placeholder,
		// 	itemToString,
        // } = this.props;
		// // TODO: Value of select needs to attach to form or state

        // const Component = filterable ? MultiSelect.Filterable : MultiSelect;

        return null;

        // return (
        //     <Component
		// 		type={type}
		// 		placeholder={placeholder}
        //         label={label}
        //         ariaLabel={label}
        //         disabled={disabled}
        //         light={light}
        //         open={open}
        //         title={title}
        //         items={items}
        //         itemToString={itemToString}
        //         onChange={onChange}
        //         onOpen={onOpen}
        //         onClose={onClose}
        //         className={classNames(
		// 			suitify({
		// 				parent: 'DropDown',
		// 				variant: className
		// 			}),
        //             suitify({
        //                 parent: 'Input',
        //                 variant: ['Select', 'Dropdown']
		// 			})
        //         )}
        //     />
        // );
	}
}

CustomMultiSelect.defaultProps = {
	disabled: false,
	locale: 'en',
	itemToString: item => (item ? item.text : ''),
	initialSelectedItems: [],
	type: 'default',
	light: false,
	open: false,
	items: [],
	filterable: false
}

CustomMultiSelect.propTypes = {
	disabled: PropTypes.bool,
	locale: PropTypes.string,
	itemToString: PropTypes.func, //Helper function to render items to a string label,
	initialSelectedItems: PropTypes.array, // allows users to pass in arbitrary items from collection that are preselected
	type: PropTypes.oneOf(['default', 'inline']),
	light: PropTypes.bool,
    title: PropTypes.string,
    open: PropTypes.bool, //Initial value
    items: PropTypes.array,
	label: PropTypes.string,
    onChange: PropTypes.func,
	useTitleInItem: PropTypes.bool, //specify title to show title on hover
	invalid: PropTypes.bool,
	invalidText: PropTypes.string,
	filterable: PropTypes.bool,

    onOpen: PropTypes.func,
    ariaLabel: PropTypes.string,
    helperText: PropTypes.string,
	onClose: PropTypes.func,
	placeholder: PropTypes.string,
    className: PropTypes.string,
}

export default CustomMultiSelect;
