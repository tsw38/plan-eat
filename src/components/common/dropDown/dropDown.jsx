import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { suitify } from 'utils/string';

import Input from 'components/common/Form/Fields/Input';
import StyledDropdown from 'components/common/dropdown/dropdown.styles';

class CustomDropdown extends React.Component {
    state = {
        selected: {
            id: '',
            text: 'Mouse Over Now'
        }
    }

    renderList = () => {
        const { items } = this.props;

        const listItems = (listItems) => listItems.map((item, index) =>
            <li
                onClick={this.handleSelect}
                data-id={item.id}
                className={suitify({
                    parent: 'Dropdown List',
                    child: 'Item'
                })}
                key={`Dropdown--List-${index}`}>
                {item.text}
            </li>
        );

        return !items ? null : (Array.isArray(items) ? listItems(items) : Object.keys(items).map((listName, index) =>
                <li
                    className="SubList"
                    key={`sublist-${index}`}>
                    <p>{listName}</p>
                    <ul>
                        {listItems(items[listName])}
                    </ul>
                </li>

        ));
    }

    handleSelect = (e) => {
        this.setState({
            className: 'noHover',
            selected: {
                id: e.target.attributes.getNamedItem('data-id').value,
                text: e.target.innerText
            }
        }, () => setTimeout(() => {
            this.setState({
                className: ''
            })
        }, 100))
    }

    DropdownTextComponent = () => {
        return (/filter/.test(this.props.type)) ? 'input' : 'span';
    }

	render() {
		const {
            type,
            name,
			label,
			items,
            options,
            onChange,
            className,
        } = this.props;

        const Component = this.DropdownTextComponent();

        return (
            <div
                tabIndex={0}
                className={classNames(
                'Dropdown',
                this.state.className
            )}>
                <Component
                    className={suitify({
                        parent: 'Dropdown',
                        child: 'SelectedText'
                    })}>
                    {(/filter/.test(this.props.type)) ? null : this.state.selected.text}
                </Component>
                <div className="Dropdown-Wrapper">
                    <ul className={classNames(
                        suitify({
                            parent: 'Dropdown',
                            child: 'List'
                        })
                    )}>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        );
	}
}

CustomDropdown.defaultProps = {
    editable: true,
    onChange: () => {},
    items: []
}

CustomDropdown.propTypes = {
    open: PropTypes.bool,
    light: PropTypes.bool,
    items: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    onOpen: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    ariaLabel: PropTypes.string,
    children: PropTypes.element,
    className: PropTypes.string,
    helperText: PropTypes.string,
    itemToString: PropTypes.func,
    defaultText: PropTypes.string,
    type: PropTypes.oneOf(['default', 'inline', 'filter'])
}

export default CustomDropdown;

