import {getCategory, getCategories, createCategory, updateCategory, deleteCategory} from '../services/category.service'


export const mutations = {
    setCategory(state, item) {
        state.category = item
    },
    setCategories(state, item) {
        state.categories = item
    },
    setCategoryError(state, item) {
        state.categoryError = item
    },
    setDeleteCategory(state, item) {
        state.deleteCategorySuccess = item
    }
}

export const actions = {
    async fetchCategory({commit}, id) {
        try {
            const item = await getCategory(id)
            commit('setCategory', item)
        } catch (err) {
            commit('setCategoryError', err)
        }
    },
    async fetchCategories({commit}) {
        try {
            const item = await getCategories()
            commit('setCategories', item)
        } catch (err) {
            commit('setCategoryError', err)
        }
    },
    async categoryDelete({commit}, id) {
        try {
            const item = await deleteCategory(id)
            commit('setDeleteCategory', item)
        } catch (err) {
            commit('setCategoryError', err)
        }
    },
    async createNewCategory({commit}, payload) {
        try {
            const item = await createCategory(payload)
            commit('setCategory', item)
        } catch (err) {
            commit('setCategoryError', err)
        }
    },
    async categoryUpdate({commit}, {payload, id}) {
        try {
            const item = await updateCategory(id, payload)
            commit('setCategory', item)
        } catch (err) {
            commit('setCategoryError', err)
        }
    }
}

export const getters = {
    category: ({ category }) => category,
    categories: ({ categories }) => categories,
    deleteCategorySuccess : ({deleteCategorySuccess }) => deleteCategorySuccess ,
    categoryError: ({ categoryError }) => categoryError
}

export const state = () => ({
    category: {},
    categories: [],
    deleteCategorySuccess: null,
    categoryError: null
})

