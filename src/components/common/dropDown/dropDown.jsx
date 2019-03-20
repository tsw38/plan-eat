import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { suitify } from 'utils/string';
import Input from 'components/common/Form/Fields/Input';
import StyledDropdown from 'components/common/dropdown/dropdown.styles';

class CustomDropdown extends React.Component {
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
        // TODO: Value of select needs to attach to form or state
        console.warn(this.props);
        return (
            <div className={classNames(
                'Dropdown'
            )}>
                <span
                    className={suitify({
                        parent: 'Dropdown',
                        child: 'SelectedText'
                    })}>
                    Mouse Over now
                </span>
                <ul className={classNames(
                    suitify({
                        parent: 'Dropdown',
                        child: 'List'
                    })
                )}>
                    {items && items.map((item, index) => {
                        <li
                            dataValue={item.id}
                            key={`Dropdown--List-{$index}`}>
                            {item.text}
                        </li>
                    })}
                </ul>
            </div>
        );
	}
}

CustomDropdown.defaultProps = {
    editable: true,
    onChange: () => {}
}

CustomDropdown.propTypes = {
    open: PropTypes.bool,
    light: PropTypes.bool,
    items: PropTypes.array,
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
    // selectedText: PropTypes.
    type: PropTypes.oneOf(['default', 'inline'])
}

export default CustomDropdown;

