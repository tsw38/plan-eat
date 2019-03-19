import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {DropdownV2, MultiSelect} from 'carbon-components-react';

import { suitify } from 'utils/string';
import Input from 'components/common/Form/Fields/Input';
import StyledDropDown from 'components/common/dropDown/dropDown.styles';

class CustomDropDown extends React.Component {
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

        return (
            <DropdownV2
                type={"default"} //or inline
                label={label}
                ariaLabel={label}
                disabled={false}
                light={false}
                open={true}
                titleText={'This is not a dropdown title'}
                helperText={'This is not a helper title'}
                items={items}
                itemToString={item => (item ? item.text : '')}
                onChange={() => {}}
                onOpen={() => {}}
                onClose={() => {}}
                className={classNames(
                    'DropDown',
                    suitify({
                        parent: 'Input',
                        variant: ['Select', 'Dropdown']
                    })
                )}
            />
        );
	}
}

CustomDropDown.defaultProps = {
    editable: true,
    onChange: () => {}
}

CustomDropDown.propTypes = {
    type: PropTypes.oneOf(['default', 'inline']),
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
    disabled: PropTypes.bool,
    light: PropTypes.bool,
    open: PropTypes.bool,
    titleText: PropTypes.string,
    helperText: PropTypes.string,
    items: PropTypes.array,
    itemToString: PropTypes.func,
    onChange: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.string,
}

export default CustomDropDown;
