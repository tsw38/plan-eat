import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {convertUnit} from 'utils/convert';

import { getRecipe, getIngredients } from 'actions/RecipeActions';

import Column from 'components/common/Layout/Column';
import RecipeHeader from 'components/recipe/header/header.container';

import { StyledRecipe } from 'components/recipe/recipe.styles';

import {Field} from 'formik';

import { toggleModal } from 'actions/ModalActions';
import { addIngredient } from 'actions/RecipeActions';
import Button from 'components/common/button';
import Input from 'components/common/Form/Fields/Input';

import FormGeneric from 'components/common/Form/FormGeneric';

class AddRecipe extends React.Component {
    state = {
        name: 'Add Recipe',
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        const { name } = this.state;
        const { render } = this.props;

        return (
            <StyledRecipe className="Recipe">
                <FormGeneric
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
            </StyledRecipe>
        );
    }
}


AddRecipe.defaultProps = {
    render: {
        title: false
    }
}

AddRecipe.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);