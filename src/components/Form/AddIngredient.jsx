import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {SigninValidator} from 'utils/validators';

import { signIn } from 'actions/AccountActions';
import { toggleModal } from 'actions/ModalActions';

import Button from 'common/Button/Button';
import Input from 'common/FormFields/Input';
import {Field} from 'formik';
import RadioButton from 'common/FormFields/Radio';
import FieldSet from 'common/FormFields/FieldSet';
import FormGeneric from 'components/Form/FormGeneric';

class AddIngredientForm extends React.Component {
    render() {
        const {
            render,
            signIn,
            toggleModal
        } = this.props;

        return (
            <FormGeneric
                id={'addIngredient'}
                title={render.title && 'Add Ingredient'}
                onError={() => {console.warn('on error')}}
                onSubmit={(values) => {console.warn(values)}}
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
                    form: ({values, errors, touched}) => {
                        return (
                            <React.Fragment>
                                <Field
                                    type="text"
                                    name="title"
                                    component={Input}
                                    label="Ingredient Name"
                                    placeholder="Ingredient"
                                />

                                <Field
                                    type="number"
                                    name="servingSize"
                                    component={Input}
                                    label="Serving Size"
                                />

                                <FieldSet
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
                                </FieldSet>

                                <FieldSet
                                    id="scaleType"
                                    label="Volume (in ml) or Mass (in grams)"
                                    value={values.scaleType}
                                    error={errors.scaleType}
                                    touched={touched.scaleType}>
                                    <Field
                                        type="radio"
                                        name="scaleType"
                                        component={Input}
                                        label="Mass"
                                        id="scaleType-true"
                                    />
                                    <Field
                                        type="radio"
                                        name="scaleType"
                                        component={Input}
                                        label="Volume"
                                        id="scaleType-false"
                                    />
                                </FieldSet>

                                <Field
                                    type="number"
                                    name="calories"
                                    component={Input}
                                    label="Calories"
                                />

                                <Field
                                    type="number"
                                    name="fat"
                                    component={Input}
                                    label="Fat"
                                />

                                <Field
                                    type="number"
                                    name="cholesterol"
                                    component={Input}
                                    label="Cholesterol"
                                />

                                <Field
                                    type="number"
                                    name="sodium"
                                    component={Input}
                                    label="Sodium"
                                />

                                <Field
                                    type="number"
                                    name="carbs"
                                    component={Input}
                                    label="Carbs"
                                />

                                <Field
                                    type="number"
                                    name="dietaryFiber"
                                    component={Input}
                                    label="Dietary Fiber"
                                />

                                <Field
                                    type="number"
                                    name="sugar"
                                    component={Input}
                                    label="Sugar"
                                />

                                <Field
                                    type="number"
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
    signIn,
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredientForm);