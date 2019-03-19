import React from 'react';
import {Field} from 'formik';
import PropTypes from 'prop-types';
import convert from 'convert-units';
import {connect} from 'react-redux';

import { toggleModal } from 'actions/ModalActions';
import { addIngredient, getGrocerSection } from 'actions/RecipeActions';

import FormConfig from 'config/forms/AddIngredient';
import {AddIngredientsValidator} from 'utils/validators';

import Button from 'components/common/button';
import Input from 'components/common/Form/Fields/Input';
import FormGeneric from 'components/common/Form/FormGeneric';
import FieldSet from 'components/common/Form/Fields/FieldSet';

class AddIngredientForm extends React.Component {
    state = {
        measurement: 'mass',
        mass: convert().list('mass'),
        volume: convert().list('volume')
    }

    componentDidMount() {
        this.props.getGrocerSection();
    }

    handleMeasurementChange = (e) => {
        this.setState({
            measurement: e.target.value
        })
    }

    handleSubmit = (values) => {
        return this.props.addIngredient(values).then(({id}) => {
            if (!!id) {
                window.alert('TODO: Proper Success Modal');
            } else {
                window.alert('TODO: Proper Error Modal');
            }

            return id;
        });
    }

    render() {
        const {
            render,
            toggleModal,
            grocerSection
        } = this.props;

        return (
            <FormGeneric
                id={'addIngredient'}
                title={render.title && 'Add Ingredient'}
                onError={() => {console.warn('on error')}}
                onSubmit={(values) => this.handleSubmit(values)}
                validators={AddIngredientsValidator}
                onComplete={() => {console.warn('on complete')}}
                initialValues={FormConfig.INITIAL_VALUES}
                render={{
                    ...render,
                    form: ({values, errors, touched, ...rest}) => {
                        return (
                            <React.Fragment>
                                <div className="Row Row--Name">
                                    <Field
                                        type="text"
                                        name="name"
                                        value={values.name || ''}
                                        component={Input}
                                        label="Ingredient Name"
                                        placeholder="Ingredient"
                                    />
                                </div>

                                <Field
                                    type="text"
                                    name="servingSize"
                                    className="Serving"
                                    value={values.servingSize || ''}
                                    component={Input}
                                    label="Serving Size"
                                />

                                <FieldSet
                                    id="scaleType"
                                    label="Measurement Type"
                                    className="scaleType"
                                    value={values.scaleType}
                                    error={errors.scaleType}
                                    handleOnChange={this.handleMeasurementChange}
                                    touched={touched.scaleType}>
                                    <Field
                                        type="radio"
                                        name="scaleType"
                                        component={Input}
                                        checked={values.scaleType === 'mass'}
                                        label="Mass"
                                        id="mass"
                                    />
                                    <Field
                                        type="radio"
                                        name="scaleType"
                                        component={Input}
                                        checked={values.scaleType === 'volume'}
                                        label="Volume"
                                        id="volume"
                                    />
                                </FieldSet>

                                <Field
                                    component={Input}
                                    type="select"
                                    label="Measurement"
                                    className="measurement"
                                    value={values.measurement || ''}
                                    name="measurement">
                                    <React.Fragment>
                                        <option value="">Select a measurement</option>
                                        {this.state[this.state.measurement].map((scale, i) => {
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
                                    component={Input}
                                    type="select"
                                    label="Grocery Section"
                                    className="grocerSection"
                                    value={values.grocerSection || ''}
                                    name="grocerSection">
                                    <React.Fragment>
                                        <option value="">Select a Grocery Section</option>
                                        {grocerSection && grocerSection.map((tag, i) => {
                                            return (
                                                <option
                                                    value={tag.id}
                                                    key={`tag-${i}`}
                                                >{tag.name}</option>
                                            );
                                        })}
                                    </React.Fragment>
                                </Field>

                                <div className="Nutrition">
                                    <Field
                                        type="text"
                                        name="calories"
                                        component={Input}
                                        label="Calories"
                                        value={values.calories || ''}
                                    />

                                    <Field
                                        type="text"
                                        name="fat"
                                        component={Input}
                                        label="Fat"
                                        value={values.fat || ''}
                                    />

                                    <Field
                                        type="text"
                                        name="cholesterol"
                                        component={Input}
                                        label="Cholesterol"
                                        value={values.cholesterol || ''}
                                    />

                                    <Field
                                        type="text"
                                        name="sodium"
                                        component={Input}
                                        label="Sodium"
                                        value={values.sodium || ''}
                                    />

                                    <Field
                                        type="text"
                                        name="carbs"
                                        component={Input}
                                        label="Carbs"
                                        value={values.carbs || ''}
                                    />

                                    <Field
                                        type="text"
                                        name="dietaryFiber"
                                        component={Input}
                                        label="Dietary Fiber"
                                        value={values.dietaryFiber || ''}
                                    />

                                    <Field
                                        type="text"
                                        name="sugar"
                                        component={Input}
                                        label="Sugar"
                                        value={values.sugar || ''}
                                    />

                                    <Field
                                        type="text"
                                        name="protein"
                                        component={Input}
                                        label="Protein"
                                        value={values.protein || ''}
                                    />
                                </div>
                            </React.Fragment>
                        )
                    },
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
    toggleModal: PropTypes.func,
    getGrocerSection: PropTypes.func
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.account,
        grocerSection: state.tags.grocerSection
    }
}

const mapDispatchToProps = {
    addIngredient,
    getGrocerSection,
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredientForm);