import { request } from './generic.service'

const getProduct = (id) => request({ url: `products/${id}`, method: 'get'})

const getProducts = () => request({ url: `products`, method: 'get'})

const createProduct = (payload) => request({ url: `products`, method: 'post'}, payload)

const updateProduct = (id, payload) => request({ url: `products/${id}`, method: 'put'}, payload)

const deleteProduct = (id) => request({ url: `products/${id}`, method: 'delete'})

export {getProduct, getProducts, createProduct, updateProduct, deleteProduct}