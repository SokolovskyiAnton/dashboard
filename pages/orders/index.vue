<template>
    <page>
        <card>
            <h2 class="text-center">Заказы</h2>
            <nuxt-link class="btn btn-success" to="orders/form">Создать категорию</nuxt-link>
            <my-table :actions="actions" :columns="columns" :data="orders" @onEdit="handleEdit" @onDelete="handleDelete"></my-table>
        </card>
    </page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {actions, columns} from './setup'

export default {
    name: 'Orders',
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
        this.fetchOrders()
    },
    methods: {
        ...mapActions({
            fetchOrders: 'orders/fetchOrders',
            orderDelete: 'orders/orderDelete'
        }),
        handleEdit({id}) {
            this.$router.push(`orders/form/${id}`)
        },
        async handleDelete({id}) {
            await this.orderDelete(id)
            this.fetchOrders()
        }
    },
    computed: {
        ...mapGetters({
            orders: 'orders/orders'
        })
    }
}
</script>