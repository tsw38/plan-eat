const ModalConfigs = {
    types: {
        danger: 'Danger',
        passive: 'Passive',
        dangerPassive: 'Danger Passive',
        transactional: 'Transactional',
    },
    get GLOBAL() {
        return {
            passive: {
                id: this.types.passive,
                type: this.types.passive
            },
            transactional: {
                id: this.types.transactional,
                type: this.types.transactional
            },
            danger: {
                id: this.types.danger,
                type: this.types.danger
            },
            dangerPassive: {
                id: this.types.dangerPassive,
                type: this.types.dangerPassive
            }
        }
    },
	get SIGN_IN_MODAL() {
        return {
            id: 1,
            type: this.types.transactional,
            heading: 'Sign In'
        }
    },
    get ADD_INGREDIENT_MODAL() {
        return {
            id: btoa('ADD_INGREDIENT_MODAL'),
            type: this.types.transactional,
            heading: 'Add Ingredient'
        }
    }
};

export default ModalConfigs;