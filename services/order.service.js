import { request } from './generic.service'

const getOrder = (id) => request({ url: `orders/${id}`, method: 'get'})

const getOrders = () => request({ url: `orders`, method: 'get'})

const createOrder = (payload) => request({ url: `orders`, method: 'post'}, payload)

const updateOrder = (id, payload) => request({ url: `orders/${id}`, method: 'put'}, payload)

const deleteOrder = (id) => request({ url: `orders/${id}`, method: 'delete'})

export {getOrder, getOrders, createOrder, updateOrder, deleteOrder}