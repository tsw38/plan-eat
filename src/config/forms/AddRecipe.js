export default {
    title: 'Add Recipe',
    id: 'addRecipe',
    INITIAL_VALUES: (values) => ({
        name: '',
        servingSize: '',
        scaleType: '',
        file: '',
        prepTime: 0,
        cookTime: 0,
        tags: [],
        ingredients: [],
        directions: [],
        notes: [],
        ...values
    })
}