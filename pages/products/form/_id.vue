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
        title: 'Создание продукта'
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
            createNewProduct: 'product/createNewProduct',
            fetchProduct: 'product/fetchProduct',
            productUpdate: 'product/productUpdate',

            fetchCategories: 'category/fetchCategories'
        }),
        setModel() {
            this.model = {
                title: '',
                description: '',
                amount: 0,
                price: 0,
                imageUrl: '',
                category: ''
            }
        },
        async onFormUpdate() {
            const updatedModel = {
                ...this.model,
                category: this.model.category._id
            }
            console.log(updatedModel);
            await this.productUpdate({
                id: this.$route.params.id,
                payload: updatedModel
            })
            this.$router.back()
        },
        async onFormCreate() {
            await this.createNewProduct(this.model)
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
            errors: 'product/productError',
            product: 'product/product',
            categories: 'category/categories'
        })
    },
    async mounted() {
        await this.fetchCategories()
        this.setFields({ fieldKey: 'category', values: this.categories })
        if(this.isUpdated) {
            await this.fetchProduct(this.$route.params.id)
            this.model = {...this.product}
            return
        }

        this.setModel()
    }
}
</script>

<style scoped>
</style>