import {getProduct, getProducts, createProduct, updateProduct, deleteProduct} from '../services/product.service'


export const mutations = {
    setProduct(state, item) {
        state.product = item
    },
    setProducts(state, item) {
        state.products = item
    },
    setProductError(state, item) {
        state.productError = item
    },
    setDeleteProduct(state, item) {
        state.deleteProductSuccess = item
    }
}

export const actions = {
    async fetchProduct({commit}, id) {
        try {
            const item = await getProduct(id)
            commit('setProduct', item)
        } catch (err) {
            commit('setCategoryError', err)
        }
    },
    async fetchProducts({commit}) {
        try {
            const item = await getProducts()
            commit('setProducts', item)
        } catch (err) {
            commit('setProductError', err)
        }
    },
    async productDelete({commit}, id) {
        try {
            const item = await deleteProduct(id)
            commit('setDeleteProduct', item)
        } catch (err) {
            commit('setProductError', err)
        }
    },
    async createNewProduct({commit}, payload) {
        try {
            const item = await createProduct(payload)
            commit('setProduct', item)
        } catch (err) {
            commit('setProductError', err)
        }
    },
    async productUpdate({commit}, {payload, id}) {
        try {
            const item = await updateProduct(id, payload)
            commit('setProduct', item)
        } catch (err) {
            commit('setProductError', err)
        }
    }
}

export const getters = {
    product: ({ product }) => product,
    products: ({ products }) => products,
    deleteProductSuccess : ({deleteProductSuccess }) => deleteProductSuccess ,
    productError: ({ productError }) => productError
}

export const state = () => ({
    product: {},
    products: [],
    deleteProductSuccess: null,
    productError: null
})

