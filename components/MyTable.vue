<template>
    <table class="table">

        <thead>
            <tr>
                <th>#</th>
                <th v-for="({name}, index) in columns" :key="index">
                    {{name}}
                </th>
                <th v-if="actions.length !== 0">Действия</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(item, indexData) in data" :key="indexData">
                <td>{{indexData + 1}}</td>
                <td v-for="({key}, tdIndex) in columns" :key="`column-${tdIndex}`">
                    {{item[key]}}
                </td>
                <td v-for="({className, label, edit, keyItem}, tdActions) in actions" :key="`columns-${tdActions}`">
                    <button :class="className" @click="$emit(edit, {id: item[keyItem]})">{{label}}</button>
                </td>
            </tr>
        </tbody>

    </table>
</template>

<script>
export default {
    name: 'Table',
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            default: () => []
        },
        actions: {
            type: Array,
            default: () => []
        },
    }
}
</script>

