import React from "react";
import {Field, FieldArray} from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FormConfig from 'config/forms/AddRecipe';

import {suitify} from 'utils/string';

import Button from 'components/common/button';
import Column from 'components/common/Layout/Column';
import Input from 'components/common/Form/Fields/Input';
import FormGeneric from 'components/common/Form/FormGeneric';
import RecipeSection from 'components/recipe/section/section.container';

import { AddRecipe } from 'components/recipe/addRecipe/addRecipe.styles';

export default class AddRecipeView extends React.Component {
    state = {
        file: '',
        imagePreviewUrl: ''
    }

    handleImageUpload = (e, fieldSetter, fieldName) => {
        const fileReader = new FileReader();
        let file = e.target.files[0];

        fileReader.onload = (e) => {
            this.setState({
                file: file,
                imagePreviewUrl: fileReader.result
            });
            fieldSetter(fieldName, file, false);
        }

        return fileReader.readAsDataURL(file);
    }

    handleSubmit = (values) => {
        console.warn('thesearrethevalues',values);
        return;
    }

    handleAddIngredient = (inputHelper, index) => {
        try {
            inputHelper.insert(index, '')
        } catch (e) {
            console.warn('this is the problem', e);
            inputHelper.push('');
        }
    }

    handleAddDirection = (inputHelper, index) => {
        try {
            inputHelper.insert(index, '')
        } catch (e) {
            console.warn('this is the problem', e);
            inputHelper.push('');
        }
    }

    handleRemoveIngredient = (inputHelper, index) => inputHelper.remove(index)

    render() {
        const {
            render
        } = this.props;

        return (
            <AddRecipe className={classNames(
                'Recipe',
                'Recipe--Add'
                )}>
                <FormGeneric
                    id={FormConfig.id}
                    title={render.title && FormConfig.title}
                    onError={() => {console.warn('on error')}}
                    onSubmit={(values) => this.handleSubmit(values)}
                    onComplete={() => {console.warn('on complete')}}
                    initialValues={FormConfig.INITIAL_VALUES}
                    render={{
                        ...render,
                        // error: user.error,
                        form: ({values, errors, touched, ...form}) => {
                            return (
                                <React.Fragment>
                                    <Column>
                                        <Field
                                            type="textarea"
                                            resize="vertical"
                                            name="name"
                                            value={values.name || ''}
                                            component={Input}
                                            placeholder="Add Recipe"
                                        />
                                        <RecipeSection
                                            listType="ol"
                                            sectionTitle="Ingredients">
                                            <FieldArray
                                                name="ingredients"
                                                render={helpers => values.ingredients &&
                                                    <React.Fragment>
                                                        {values.ingredients &&
                                                            values.ingredients.map((ingredient, index) =>
                                                                <Field
                                                                    type="textarea"
                                                                    resize="vertical"
                                                                    key={`Ingredients-${index}`}
                                                                    name={`ingredients.${index}`}
                                                                    value={ingredient || ''}
                                                                    component={Input}
                                                                    placeholder="Add Ingredient"
                                                                />
                                                        )}

                                                        <button
                                                            className={suitify({
                                                                parent: 'Button',
                                                                variant: 'Tertiary'
                                                            })}
                                                            type="button"
                                                            onClick={() => this.handleAddDirection(helpers, values.directions.length + 1)}>
                                                            Add Ingredient
                                                        </button>
                                                    </React.Fragment>
                                                }
                                            />
                                        </RecipeSection>

                                        <p><br />servingSize, direction, notes</p>

                                        <RecipeSection
                                            listType="ol"
                                            sectionTitle="Directions">
                                            <FieldArray
                                                name="directions"
                                                render={helpers => values.directions &&
                                                    <React.Fragment>
                                                        {values.directions &&
                                                            values.directions.map((ingredient, index) =>
                                                            <Field
                                                                type="textarea"
                                                                resize="vertical"
                                                                key={`Directions-${index}`}
                                                                name={`directions.${index}`}
                                                                value={values.directions[index] || ''}
                                                                component={Input}
                                                                placeholder="Add Direction"
                                                            />
                                                        )}

                                                        <button
                                                            className="Button Button--Primary"
                                                            type="button"
                                                            onClick={() => this.handleAddDirection(helpers, values.directions.length + 1)}>
                                                            Add Direction
                                                        </button>
                                                    </React.Fragment>
                                                }
                                            />
                                        </RecipeSection>

                                    </Column>
                                    <Column>
                                        <div className="Recipe--Image">
                                            <div
                                                className="forcedLayout"
                                                style={{backgroundImage: `url("${this.state.imagePreviewUrl}")`}}
                                                >
                                                <Field
                                                    type="file"
                                                    name="file"
                                                    component={Input}
                                                    onChange={(e) => this.handleImageUpload(e, form.setFieldValue, "file")}
                                                />
                                            </div>
                                        </div>

                                        <p>prepTime, CookTime, editable Tags</p>
                                    </Column>
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
                        )
                    }} />
            </AddRecipe>
        );
    }
}


//     <Field
//     type="text"
//     name="recipeName"
//     value={values.recipeName || ''}
//     component={Input}
//     placeholder="Add Recipe"
// />