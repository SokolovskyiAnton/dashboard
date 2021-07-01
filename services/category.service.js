import { request } from './generic.service'

const getCategory = (id) => request({ url: `categories/${id}`, method: 'get'})

const getCategories = () => request({ url: `categories`, method: 'get'})

const createCategory = (payload) => request({ url: `categories`, method: 'post'}, payload)

const updateCategory = (id, payload) => request({ url: `categories/${id}`, method: 'put'}, payload)

const deleteCategory = (id) => request({ url: `categories/${id}`, method: 'delete'})

export {getCategory, getCategories, createCategory, updateCategory, deleteCategory}