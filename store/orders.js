import {getOrder, getOrders, createOrder, updateOrder, deleteOrder} from '../services/order.service'


export const mutations = {
    setOrder(state, item) {
        state.order = item
    },
    setOrders(state, item) {
        state.orders = item
    },
    setOrderError(state, item) {
        state.orderError = item
    },
    setDeleteOrder(state, item) {
        state.deleteOrderSuccess = item
    }
}

export const actions = {
    async fetchOrder({commit}, id) {
        try {
            const item = await getOrder(id)
            commit('setOrder', item)
        } catch (err) {
            commit('setOrderError', err)
        }
    },
    async fetchOrders({commit}) {
        try {
            const item = await getOrders()
            commit('setOrders', item)
        } catch (err) {
            commit('setOrderError', err)
        }
    },
    async orderDelete({commit}, id) {
        try {
            const item = await deleteOrder(id)
            commit('setDeleteOrder', item)
        } catch (err) {
            commit('setOrderError', err)
        }
    },
    async createNewOrder({commit}, payload) {
        try {
            const item = await createOrder(payload)
            commit('setOrder', item)
        } catch (err) {
            commit('setOrderError', err)
        }
    },
    async orderUpdate({commit}, {payload, id}) {
        try {
            const item = await updateOrder(id, payload)
            commit('setOrder', item)
        } catch (err) {
            commit('setOrderError', err)
        }
    }
}

export const getters = {
    order: ({ order }) => order,
    orders: ({ orders }) => orders,
    deleteOrdertSuccess : ({deleteOrdertSuccess }) => deleteOrdertSuccess ,
    orderError: ({ orderError }) => orderError
}

export const state = () => ({
    order: {},
    orders: [],
    deleteOrdertSuccess: null,
    orderError: null
})
