import React from "react";
import {Field} from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Column from 'components/common/Layout/Column';
import RecipeHeader from 'components/recipe/header/header.container';

import FormGeneric from 'components/common/Form/FormGeneric';

import Button from 'components/common/button';
import Input from 'components/common/Form/Fields/Input';

import { AddRecipe } from 'components/recipe/addRecipe/addRecipe.styles';

export default  ({name, render, ...props}) => {
    return (
        <AddRecipe className={classNames(
            'Recipe',
            'Recipe--Add'
            )}>
            <FormGeneric
                id={'addRecipe'}
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
                                <Column>
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
                                </Column>
                                <Column></Column>
                            </React.Fragment>
                        )
                    }
                }} />
        </AddRecipe>
    );
}