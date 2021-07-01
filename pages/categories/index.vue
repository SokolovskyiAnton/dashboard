<template>
    <page>
        <card>
            <h2 class="text-center">Категории</h2>
            <nuxt-link class="btn btn-success" to="categories/form">Создать категорию</nuxt-link>
            <my-table :actions="actions" :columns="columns" :data="categories" @onEdit="handleEdit" @onDelete="handleDelete"></my-table>
        </card>
    </page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {actions, columns} from './setup'

export default {
    middleware: 'auth',
    name: 'Categories',
    data() {
        return {
            actions,
            columns
        }
    },

    components: {
        MyTable: () => import('@/components/MyTable'),
        Card: () => import('@/components/Card'),
        Page: () => import('@/components/Page')
    },
    mounted() {
        this.fetchCategories()
    },
    methods: {
        ...mapActions({
            fetchCategories: 'category/fetchCategories',
            categoryDelete: 'category/categoryDelete'
        }),
        handleEdit({id}) {
            this.$router.push(`categories/form/${id}`)
        },
        async handleDelete({id}) {
            await this.categoryDelete(id)
            this.fetchCategories()
        }
    },
    computed: {
        ...mapGetters({
            categories: 'category/categories'
        })
    }
}
</script>