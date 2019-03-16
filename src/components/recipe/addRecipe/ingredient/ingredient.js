import React from "react";
import {Field} from 'formik';
import Input from 'components/common/Form/Fields/Input';
export default class AddIngredient extends React.Component {
    render() {
        return (
            <div className="AddIngredient">
                <Input
                    type="text"
                    name="text"
                    label="insert"
                />
            </div>
        )
    }
}