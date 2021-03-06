import React from "react";
import classNames from 'classnames';
import {Field, FieldArray} from 'formik';

import FormConfig from 'config/forms/AddRecipe';

import {suitify} from 'utils/string';

import Button from 'components/common/button';
import Column from 'components/common/Layout/Column';
import Input from 'components/common/Form/Fields/Input';
import ServingSize from 'components/recipe/servingSize';
import FormGeneric from 'components/common/Form/FormGeneric';
import RecipeSection from 'components/recipe/section/section.container';

import { AddRecipe } from 'components/recipe/addRecipe/addRecipe.styles';

export default ({
    render,
    servingSize,
    handleError,
    handleSubmit,
    handleComplete,
    imagePreviewUrl,
    handleImageUpload,
    increaseServingSize,
    decreaseServingSize,
    handleAddIngredient,
    handleAddToInputArray
}) => {
    return (
        <AddRecipe className={classNames(suitify({parent: 'Recipe', variant: 'Add'}))}>
            <FormGeneric
                enableReinitialize={true}
                id={FormConfig.id}
                title={render && render.title && FormConfig.title}
                onError={handleError}
                onSubmit={handleSubmit}
                onComplete={handleComplete}
                initialValues={FormConfig.INITIAL_VALUES({servingSize})}
                render={{
                    ...render,
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
                                        sectionTitle="Ingredients"
                                        firstSectionChild={(
                                            <ServingSize
                                                onIncrease={increaseServingSize}
                                                onDecrease={decreaseServingSize}
                                                servingSize={servingSize}
                                                formValue={values.servingSize}
                                            />
                                        )}>
                                        {/* //FIXME: Recipe switch serving size not reseting */}
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

                                    {/* //TODO: Add Serving Size */}

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
                                                        className={suitify({
                                                            parent: 'Button',
                                                            variant: 'Tertiary'
                                                        })}
                                                        type="button"
                                                        onClick={() => handleAddToInputArray(helpers, values.directions.length + 1)}>
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
                                                        className={suitify({
                                                            parent: 'Button',
                                                            variant: 'Tertiary'
                                                        })}
                                                        type="button"
                                                        onClick={() => handleAddToInputArray(helpers, values.directions.length + 1)}>
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
                                                backgroundImage: `url("${imagePreviewUrl}")`
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
                                    {/* //TODO: Add Prep time */}
                                    {/* //TODO: Add Cook time */}
                                    {/* //TODO: Add Tags to recipe */}
                                </Column>
                            </React.Fragment>
                        )
                    },
                    buttons: (
                        <div className="ButtonWrapper">
                            {/* TODO: Modal to ensure clear form */}
                            {/* TODO: on cancel, clear form */}
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
