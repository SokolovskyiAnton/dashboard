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
import { relationsMixin } from '@/mixins/relation.mixin'

export default {
    data: () => ({
        model: null,
        schema,
        title: 'Создание категории'
    }),
    middleware: 'auth',
    mixins: [relationsMixin],
    components: {
        CrudForm: () => import('@/components/CrudForm'),
        Card: () => import('@/components/Card'),
        Page: () => import('@/components/Page')
    },
    methods: {
        ...mapActions({
            createNewCategory: 'category/createNewCategory',
            fetchCategory: 'category/fetchCategory',
            categoryUpdate: 'category/categoryUpdate',

            fetchProducts: 'product/fetchProducts'
        }),
        setModel() {
            this.model = {
                title: '',
                description: '',
                products: []
            }
        },
        async onFormUpdate() {
            const updatedModel = {
                ...this.model,
                products: this.model.products.map((product) => product._id)
            }
            await this.categoryUpdate({
                id: this.$route.params.id,
                payload: updatedModel
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
            errors: 'category/categoryError',
            category: 'category/category',
            products: 'product/products'
        })
    },
    async mounted() {
        await this.fetchProducts()
        this.setFields({ fieldKey: 'products', values: this.products })
        if(this.isUpdated) {
            await this.fetchCategory(this.$route.params.id)
            
            this.model = {...this.category} 
            return
        }

        this.setModel()
    }
}
</script>

<style scoped>
</style>