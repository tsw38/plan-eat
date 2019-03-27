import React from "react";
import convert from 'convert-units';

import Input from 'components/common/Form/Fields/Input';
import { Dropdown } from 'components/common/dropdown';
export default class AddIngredient extends React.Component {
    state = {
        measurement: 'mass',
        mass: convert().list('mass'),
        volume: convert().list('volume')
    }

    render() {
        console.warn(this.props, 'ingredient');

        return (
            <div className="AddIngredient">
                <div className="Row Row--Name">
                    <Dropdown
                        type={'filter'}
                        name="name"
                        label="Ingredient Name"
                        placeholder="Ingredient Name"
                        items={[
                            ...this.state[this.state.measurement].map((scale, i) => ({
                                id: scale.abbr,
                                text: `${scale.plural} (${scale.abbr})`
                            }))
                        ]}
                    />
                </div>

                <Input
                    type="text"
                    name="quantity"
                    label="Quantity"
                    className="Serving"
                    onChange={(e) => {
                        console.warn('etargetvalue', e.target.value);
                        this.props.handleInputUpdate({
                            input: e.target.value
                        })
                    }}
                />

                <Dropdown
                    type={'filter'}
                    name={"Test"}
                    label={"Test"}
                    items={[
                        {
                            id: '',
                            text: 'Select a measurement'
                        },
                        ...this.state[this.state.measurement].map((scale, i) => ({
                            id: scale.abbr,
                            text: `${scale.plural} (${scale.abbr})`
                        }))
                    ]}
                />
            </div>
        )
    }
}


                    // <Input
                    //     type="text"
                    //     name="name"
                    //     label="Ingredient Name"
                    //     placeholder="Ingredient"
                    //     onChange={(e) => {
                    //         console.warn('etargetvalue', e.target.value);
                    //         this.props.handleInputUpdate({
                    //             input: e.target.value
                    //         })
                    //     }}
                    // />