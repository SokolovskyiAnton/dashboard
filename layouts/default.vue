<template>
  <div class="app">
    <nav-layout :menu="menu" @onLogout="handleLogout"></nav-layout>
    <div class="content">
      <main>
        <Nuxt />
      </main>
      
    </div>
  </div>
</template>

<script>
import menu from './setup'
export default {
  name: 'defaultLayout',
  components: {
    NavLayout: () => import('../components/layout/Nav.vue')
  },
  data: () => ({
    menu,
    tokens: {
      deleteToken: null
    }
  }),
  methods: {
    async handleLogout() {
      
      
      try {
          const response = await this.$auth.logout('local', {
            data: this.tokens
          })
        localStorage.clear()
        this.$router.push('/login')
      } catch (err) {
        this.loginFormError = err.response.data.message
      }
    }
  },
  mounted() {
    const refreshToken = localStorage.getItem('auth._refresh_token.local')
    this.tokens.deleteToken = refreshToken
  }
}
</script>

<style lang="scss">
@import '../assets/styles/global.scss';
.app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85vw;
  border-left: 1px solid rgb(0, 0, 0, 0.1);
}
main {
  height: 100vh;
  background: $main-bg;
}
</style>
