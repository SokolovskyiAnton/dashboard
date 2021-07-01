export const columns = [
    {
        key: 'title',
        name: 'Название продутка'
    },
    {
        key: 'amount',
        name: 'Количество товара'
    },
    {
        key: 'price',
        name: 'Цена'
    }
]

export const actions = [
    {
        className: 'btn btn-warning',
        edit: 'onEdit',
        label: 'Изменить',
        keyItem: '_id'
    },
    {
        className: 'btn btn-danger',
        edit: 'onDelete',
        label: 'Удалить',
        keyItem: '_id'
    }
]