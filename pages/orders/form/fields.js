export const schema = {
    fields: [
        {
            type: 'input',
            label: 'Название категории',
            model: 'fullname',
            placeholder: 'Введите название',
            styleClasses: 'col-md-6',
            min: 6,
            required: true,
            inputType: 'text'
        },
        {
            type: 'textArea',
            label: 'Описание товара',
            model: 'mail',
            placeholder: 'Введите описание',
            styleClasses: 'col-md-12',
            hint: 'Максимальное кол-во символов - 500',
            max: 500,
            rows: 4
        }
    ]
}