<template>
    <page>
        <card>
            <h2 class="text-center">Продукты</h2>
            <nuxt-link class="btn btn-success" to="products/form">Создать товар</nuxt-link>
            <my-table :actions="actions" :columns="columns" :data="products" @onEdit="handleEdit" @onDelete="handleDelete"></my-table>
        </card>
    </page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {actions, columns} from './setup'

export default {
    
    name: 'Products',
    middleware: 'auth',
    data: () => ({
        actions,
        columns
    }),

    components: {
        MyTable: () => import('@/components/MyTable'),
        Card: () => import('@/components/Card'),
        Page: () => import('@/components/Page')
    },
    mounted() {
        this.fetchProducts()
    },
    methods: {
        ...mapActions({
            fetchProducts: 'product/fetchProducts',
            productDelete: 'product/productDelete'
        }),
        handleEdit({id}) {
            this.$router.push(`products/form/${id}`)
        },
        async handleDelete({id}) {
            await this.productDelete(id)
            this.fetchProducts()
        }
    },
    computed: {
        ...mapGetters({
            products: 'product/products'
        })
    }
}
</script>