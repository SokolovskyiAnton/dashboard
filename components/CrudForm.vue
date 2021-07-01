<template>
  <div class="panel-body">
      <h2 class="text-center">{{formTitle}}</h2>
      <form @submit.prevent="validation">
            <vue-form-generator 
                :schema="formSchema"
                :model="formModel"
                :options="formOptions"
                ref="form"
            />
            <hr/>

            <div class="text-center">
                <button class="btn btn-success" type="submit">Подтвердить</button>
            </div>
      </form>
      
  </div>
</template>

<script>
  export default {
    name: 'CrudForm',
    props: {
        formSchema: {
            type: Object,
            default: () => {}
        },
        formModel: {
            type: Object,
            default: () => {}
        },
        formOptions: {
            type: Object,
            default: () => ({
                validateAsync: true
            })
        },
        formTitle: {
            type: String,
            default: ''
        }
    },
    methods: {
        async validation() {

            const errors = await this.$refs.form.validate()
            const isValid = errors.length === 0

            if (isValid) {

                this.$emit('on-submit', this.formModel)
            }
        }
    }
  }
</script>

<style scoped>
</style>