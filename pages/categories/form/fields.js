export const schema = {
    fields: [
        {
            type: 'input',
            label: 'Название категории',
            model: 'title',
            placeholder: 'Введите название',
            styleClasses: 'col-md-6',
            min: 6,
            required: true,
            inputType: 'text'
        },
        {
            type: 'vueMultiSelect',
            model: 'products',
            label: 'Товары',
            styleClasses: 'col-md-6',
            placeholder: 'Добавить товары',
            selectOptions: {
                multiple: true,
                key: 'title',
                id: '_id',
                trackBy: 'title',
                label: 'title',
                searhable: true,
                hideSelected: true
            },
            values: []
        },
        {
            type: 'textArea',
            label: 'Описание категории',
            model: 'description',
            placeholder: 'Введите описание',
            styleClasses: 'col-md-12',
            hint: 'Максимальное кол-во символов - 500',
            max: 500,
            rows: 4
        }
    ]
}