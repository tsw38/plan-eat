import React from "react";
import {Field} from 'formik';
import Input from 'components/common/Form/Fields/Input';
export default class AddIngredient extends React.Component {
    render() {
        console.warn(this.props, 'ingredient');

        return (
            <div className="AddIngredient">
                <Input
                    type="text"
                    name="text"
                    label="insert"
                    onChange={(e) => {
                        console.warn('etargetvalue', e.target.value);
                        this.props.handleInputUpdate({
                            input: e.target.value
                        })
                    }}
                />
            </div>
        )
    }
}