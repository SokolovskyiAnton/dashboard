export const schema = {
    fields: [
        {
            type: 'input',
            label: 'Название товара',
            model: 'title',
            placeholder: 'Введите название',
            styleClasses: 'col-md-6',
            min: 6,
            required: true,
            inputType: 'text'
        },
        {
            type: 'vueMultiSelect',
            model: 'category',
            label: 'Категория',
            styleClasses: 'col-md-6',
            placeholder: 'Добавить категорию',
            selectOptions: {
                multiple: false,
                key: 'title',
                id: '_id',
                trackBy: 'title',
                label: 'title',
                searchable: true,
                hideSelected: true,
            },
            values: [],

        },
        {
            type: 'input',
            label: 'Стоимость товара',
            model: 'price',
            placeholder: 'Введите стоимость',
            styleClasses: 'col-md-6',
            inputType: 'text'
        },
        {
            type: 'input',
            label: 'Количество товара',
            model: 'amount',
            placeholder: 'Введите количество',
            styleClasses: 'col-md-6',
            inputType: 'text'
        },
        {
            type: 'textArea',
            label: 'Описание товара',
            model: 'description',
            placeholder: 'Введите описание',
            styleClasses: 'col-md-12',
            hint: 'Максимальное кол-во символов - 500',
            max: 500,
            rows: 4
        },
        {
            type: 'input',
            label: 'Ссылка на изображение',
            model: 'imageUrl',
            placeholder: 'Вставьте ссылку на изображение',
            styleClasses: 'col-md-6',
            inputType: 'text'
        }
    ]
}