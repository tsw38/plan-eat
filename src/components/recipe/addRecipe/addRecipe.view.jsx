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

    handleSubmit = (values) => {
        console.warn('thesearrethevalues',values);
        return;
    }

    handleAddToInputArray = (inputHelper, index) => {
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
            render,
            injectModal,
            imagePreviewUrl,
            handleImageUpload,
            handleAddIngredient
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
                                                            onClick={() => handleAddIngredient(helpers, values.ingredients.length + 1)}>
                                                            Add Ingredient
                                                        </button>
                                                    </React.Fragment>
                                                }
                                            />
                                        </RecipeSection>

                                        <p><br />servingSize</p>

                                        <RecipeSection
                                            listType="ol"
                                            sectionTitle="Directions">
                                            <FieldArray
                                                name="directions"
                                                render={helpers => values.directions &&
                                                    <React.Fragment>
                                                        {values.directions &&
                                                            values.directions.map((ingredient, index) =>
                                                            <div className={'Recipe--Section--List--item'}
                                                                key={`Directions-${index}`}>
                                                                <span>{index+1}</span>
                                                                <Field
                                                                    type="textarea"
                                                                    resize="vertical"
                                                                    name={`directions.${index}`}
                                                                    value={values.directions[index] || ''}
                                                                    component={Input}
                                                                    placeholder="Add Direction"
                                                                />
                                                            </div>

                                                        )}

                                                        <button
                                                            className="Button Button--Primary"
                                                            type="button"
                                                            onClick={() => this.handleAddToInputArray(helpers, values.directions.length + 1)}>
                                                            Add Direction
                                                        </button>
                                                    </React.Fragment>
                                                }
                                            />
                                        </RecipeSection>

                                        <RecipeSection
                                            listType="ol"
                                            sectionTitle="Notes">
                                            <FieldArray
                                                name="notes"
                                                render={helpers => values.notes &&
                                                    <React.Fragment>
                                                        {values.notes &&
                                                            values.notes.map((ingredient, index) =>
                                                            <div className={'Recipe--Section--List--item'}
                                                                key={`Notes-${index}`}>
                                                                <span>{index+1}</span>
                                                                <Field
                                                                    type="textarea"
                                                                    resize="vertical"
                                                                    name={`notes.${index}`}
                                                                    value={values.notes[index] || ''}
                                                                    component={Input}
                                                                    placeholder="Add Note"
                                                                />
                                                            </div>
                                                        )}

                                                        <button
                                                            className="Button Button--Primary"
                                                            type="button"
                                                            onClick={() => this.handleAddToInputArray(helpers, values.directions.length + 1)}>
                                                            Add Note
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
                                                style={{
                                                    backgroundImage: `url("${imagePreviewUrl}")`,
                                                    backgroundColor: ''
                                                }}
                                                >
                                                <Field
                                                    type="file"
                                                    name="file"
                                                    component={Input}
                                                    onChange={(e) => handleImageUpload(e, form.setFieldValue, "file")}
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
