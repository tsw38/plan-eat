import React from 'react';
import {Field} from 'formik';
import PropTypes from 'prop-types';
import convert from 'convert-units';
import {connect} from 'react-redux';

import { toggleModal } from 'actions/ModalActions';
import { addIngredient } from 'actions/RecipeActions';

import {AddIngredientsValidator} from 'utils/validators';
import {SigninValidator} from 'utils/validators';

import Button from 'components/common/button';
import Input from 'components/common/Form/Fields/Input';

import AddRecipe from 'styles/components/common/Form/AddRecipe';

class AddRecipeForm extends React.Component {
    state = {
    }

    componentDidMount() {

    }

    handleSubmit = (values) => {
        console.warn(values);
    }

    render() {
        const {
            render
        } = this.props;

        return (
            <AddRecipe
                id={'addIngredient'}
                title={render.title && 'Add Recipe'}
                onError={() => {console.warn('on error')}}
                onSubmit={(values) => this.handleSubmit(values)}
                onComplete={() => {console.warn('on complete')}}
                initialValues={{
                    name: '',
                    servingSize: '',
                    scaleType: '',
                    calories: '',
                    fat: '',
                    cholesterol: '',
                    sodium: '',
                    carbs: '',
                    dietaryFiber: '',
                    sugar: '',
                    protein: ''
                }}
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
                                    name="recipeName"
                                    value={values.recipeName || ''}
                                    component={Input}
                                    placeholder="Add Recipe"
                                />




                                <Field
                                    type="text"
                                    name="name"
                                    value={values.name || ''}
                                    component={Input}
                                    label="Ingredient Name"
                                    placeholder="Ingredient"
                                />

                                <Field
                                    type="text"
                                    name="servingSize"
                                    value={values.servingSize || ''}
                                    component={Input}
                                    label="Serving Size"
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
                            </React.Fragment>
                        )
                    }
                }} />
        )
    }
};

AddRecipeForm.defaultProps = {
    render: {
        title: false
    }
}

AddRecipeForm.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);