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
import RadioSet from 'common/FormFields/RadioSet';
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
                                <Input
                                    type="text"
                                    name="title"
                                    label="Ingredient Name"
                                    placeholder="Ingredient"
                                />
                                <RadioSet
                                    id="scaleType"
                                    label="Volume or Mass (in grams)"
                                    value={values.scaleType}
                                    error={errors.scaleType}
                                    touched={touched.scaleType}>
                                    <Field
                                        component={RadioButton}
                                        name="scaleType"
                                        id={"scaleType-true"}
                                        label="Mass"
                                        type="radio"
                                        checked={true}
                                    />
                                    <Field
                                        component={RadioButton}
                                        name="scaleType"
                                        id={"scaleType-false"}
                                        label={"Volume"}
                                    />
                                </RadioSet>
                                <RadioSet
                                    id="systemType"
                                    label="Metric or Imperial"
                                    value={values.systemType}
                                    error={errors.systemType}
                                    touched={touched.systemType}>
                                    <Field
                                        component={RadioButton}
                                        name="systemType"
                                        id={"systemType-true"}
                                        label="Metric"
                                        checked={true}
                                    />
                                    <Field
                                        component={RadioButton}
                                        name="systemType"
                                        id={"systemType-false"}
                                        label={"Imperial"}
                                    />
                                </RadioSet>
                                <Input
                                    type="number"
                                    name="calories"
                                    label="Calories"
                                />
                                <Input
                                    type="number"
                                    name="fat"
                                    label="Fat"
                                />
                                <Input
                                    type="number"
                                    name="cholesterol"
                                    label="Cholesterol"
                                />
                                <Input
                                    type="number"
                                    name="sodium"
                                    label="Sodium"
                                />
                                <Input
                                    type="number"
                                    name="totalCarbs"
                                    label="Carbs"
                                />
                                <Input
                                    type="number"
                                    name="dietaryFiber"
                                    label="Dietary Fiber"
                                />
                                <Input
                                    type="number"
                                    name="sugar"
                                    label="Sugar"
                                />
                                <Input
                                    type="number"
                                    name="protein"
                                    label="Protein"
                                />
                                {/* <RadioSet /> */}
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