<template>
    <nav class="aside">
      <nav-item v-for="(item, key) in menu" :key="key" :to="item.to">{{item.name}}</nav-item>
      <button class="btn btn-danger" @click="$emit('onLogout')">Выйти</button>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  components: {
    NavItem: () => import('../NavItem.vue')
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.aside {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15vw;
  padding: 10px;
}
</style>