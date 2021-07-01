<template>
  <page>
      <div class="row">
          <div class="col-md-9">
              <card>
                <crud-form v-if="model" :form-schema="schema" :form-model="model" :form-title="title" @on-submit="onFormSubmit"/>
                <p class="text-danger">{{errors}}</p>
              </card>
          </div>
          <div class="col-md-3"></div>
      </div>
  </page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { schema } from './fields'

export default {
    middleware: 'auth',
    data: () => ({
        model: null,
        schema,
        title: 'Информация о заказе'
    }),
    components: {
        CrudForm: () => import('@/components/CrudForm'),
        Card: () => import('@/components/Card'),
        Page: () => import('@/components/Page')
    },
    methods: {
        ...mapActions({
            createNewCategory: 'category/createNewCategory',
            fetchOrder: 'orders/fetchOrder',
            orderUpdate: 'orders/orderUpdate'
        }),
        setModel() {
            this.model = {
                fullname: '',
                mail: ''
            }
        },
        async onFormUpdate() {
            await this.orderUpdate({
                id: this.$route.params.id,
                payload: this.model
            })
            this.$router.back()
        },
        async onFormCreate() {
            await this.createNewCategory(this.model)
            this.$router.back()
        },
        async onFormSubmit() {
            if(this.isUpdated) {
                this.onFormUpdate()
                return
            }
            this.onFormCreate()
        }
    },
    computed: {
        isUpdated: ({$route: {params: {id}}}) => id !== undefined,
        ...mapGetters({
            errors: 'orders/orderError',
            order: 'orders/order'
        })
    },
    async mounted() {
        if(this.isUpdated) {
            await this.fetchOrder(this.$route.params.id)
            this.model = {...this.order}
            return
        }

        this.setModel()
    }
}
</script>

<style scoped>
</style>