<template>
    <div class="col-md-6 col-sm-12">
        <div class="login-form">
            <FormValidation ref="authForm">
                <form @submit.prevent="onLogin">

                    <FieldValidation name="email" rules="email|required" slim mode="lazy" v-slot="{errors}">
                    <div class="form-group">
                        <label>Электронная почта</label>
                        <input :class="{'is-invalid': errors.length > 0}" type="text" class="form-control" placeholder="Введите почту" v-model="formData.email" name="email">
                        <small class="invalid-feedback" v-for="(error, key) in errors" :key="`email-${key}`" v-show="errors  ">{{error}}</small>
                    </div>
                    </FieldValidation>

                    <FieldValidation name="password" rules="required" slim mode="lazy" v-slot="{errors}">
                    <div class="form-group">
                        <label>Пароль</label>
                        <input :class="{'is-invalid': errors.length > 0}" type="password" class="form-control" placeholder="Введите пароль" v-model="formData.password" name="password">
                        <small class="invalid-feedback" v-for="(error, key) in errors" :key="`password-${key}`" v-show="errors  ">{{error}}</small>
                    </div>
                    </FieldValidation>
                    <div class="login-form__error" v-show="loginFormError">{{loginFormError}}</div>
                    <button type="submit" class="btn btn-success">Войти</button>
                </form>
            </FormValidation>
        </div>
    </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate'
  export default {
    name: 'LoginPage',
    layout: 'unauthorized',
    data: () => ({
        formData: {
            email: '',
            password: ''
        },
        loginFormError: null
    }),
    components: {
        FormValidation: ValidationObserver,
        FieldValidation: ValidationProvider
    },
    methods: {
        async onLogin() {
            const isCorrect = await this.$refs.authForm.validate()

            if (isCorrect) {
                try {
                    const response = await this.$auth.loginWith('local', {
                        data: this.formData
                    })
                    this.$router.push('/')
                } catch (err) {
                    this.loginFormError = err.response.data.message
                }
            }
        }
    }
  }
</script>

<style scoped>
.login-form__error {
    color: white;
    font-size: 13px;
    margin-bottom: 15px;
    border: 1px solid rgba(248, 148, 148, 1);
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(248, 148, 148, 1);
}
</style>