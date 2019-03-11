import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import convert from 'convert-units';

import { toggleModal } from 'actions/ModalActions';
import { addIngredient } from 'actions/RecipeActions';

import {AddIngredientsValidator} from 'utils/validators';


import Button from 'common/Button/Button';
import Input from 'common/FormFields/Input';
import {Field} from 'formik';
import FieldSet from 'common/FormFields/FieldSet';
import FormGeneric from 'components/Form/FormGeneric';

class AddIngredientForm extends React.Component {
    state = {
        measurement: 'mass',
    }

    componentDidMount() {

    }

    handleMeasurementChange = (e) => {
        this.setState({
            measurement: e.target.value
        })
    }

    render() {
        const {
            render,
            addIngredient,
            toggleModal
        } = this.props;

        return (
            <FormGeneric
                id={'addIngredient'}
                title={render.title && 'Add Ingredient'}
                onError={() => {console.warn('on error')}}
                onSubmit={addIngredient}
                validators={AddIngredientsValidator}
                onComplete={() => {console.warn('on complete')}}
                initialValues={{}}
                render={{
                    ...render,
                    // error: user.error,
                    buttons: (
                        <div className="ButtonWrapper">
                            <Button
                                type="button"
                                onClick={() => toggleModal(render.modal)}
                                className="Button--Secondary">
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="Button--Primary">
                                Submit
                            </Button>
                        </div>
                    ),
                    form: ({values, errors, touched, ...rest}) => {
                        return (
                            <React.Fragment>
                                <Field
                                    type="text"
                                    name="name"
                                    component={Input}
                                    label="Ingredient Name"
                                    placeholder="Ingredient"
                                />

                                <Field
                                    type="text"
                                    name="servingSize"
                                    component={Input}
                                    label="Serving Size"
                                />

                                {/* <FieldSet
                                    id="systemType"
                                    label="Metric or Imperial"
                                    value={values.systemType}
                                    error={errors.systemType}
                                    touched={touched.systemType}>
                                    <Field
                                        type="radio"
                                        name="systemType"
                                        component={Input}
                                        label="Metric"
                                        id="systemType-true"
                                    />
                                    <Field
                                        type="radio"
                                        name="systemType"
                                        component={Input}
                                        label="Imperial"
                                        id="systemType-false"
                                    />
                                </FieldSet> */}

                                <FieldSet
                                    id="scaleType"
                                    label="Measurement Type"
                                    value={values.scaleType}
                                    error={errors.scaleType}
                                    handleOnChange={this.handleMeasurementChange}
                                    touched={touched.scaleType}>
                                    <Field
                                        type="radio"
                                        name="scaleType"
                                        component={Input}
                                        label="Mass"
                                        id="mass"
                                    />
                                    <Field
                                        type="radio"
                                        name="scaleType"
                                        component={Input}
                                        label="Volume"
                                        id="volume"
                                    />
                                </FieldSet>

                                <Field
                                    component={Input}
                                    type="select"
                                    label="Measurement"
                                    name="measurement">
                                    <React.Fragment>
                                        {convert().list(this.state.measurement).map((scale, i) => {
                                            return (
                                                <option
                                                    value={scale.abbr}
                                                    key={`measurement-${i}`}
                                                >{scale.plural} ({scale.abbr})</option>
                                            );
                                        })}
                                    </React.Fragment>
                                </Field>

                                <Field
                                    type="text"
                                    name="calories"
                                    component={Input}
                                    label="Calories"
                                />

                                <Field
                                    type="text"
                                    name="fat"
                                    component={Input}
                                    label="Fat"
                                />

                                <Field
                                    type="text"
                                    name="cholesterol"
                                    component={Input}
                                    label="Cholesterol"
                                />

                                <Field
                                    type="text"
                                    name="sodium"
                                    component={Input}
                                    label="Sodium"
                                />

                                <Field
                                    type="text"
                                    name="carbs"
                                    component={Input}
                                    label="Carbs"
                                />

                                <Field
                                    type="text"
                                    name="dietaryFiber"
                                    component={Input}
                                    label="Dietary Fiber"
                                />

                                <Field
                                    type="text"
                                    name="sugar"
                                    component={Input}
                                    label="Sugar"
                                />

                                <Field
                                    type="text"
                                    name="protein"
                                    component={Input}
                                    label="Protein"
                                />
                            </React.Fragment>
                        )
                    }
                }} />
        )
    }
};

AddIngredientForm.defaultProps = {
    render: {
        title: true
    }
}

AddIngredientForm.propTypes = {
    user: PropTypes.object,
    signIn: PropTypes.func,
    render: PropTypes.object,
    toggleModal: PropTypes.func
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.account
    }
}

const mapDispatchToProps = {
    addIngredient,
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredientForm);