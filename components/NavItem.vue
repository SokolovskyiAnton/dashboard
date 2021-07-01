<template>
    <nuxt-link class="link" :to="to" :exact="exact">
        <slot />
    </nuxt-link>
</template>

<script>
export default {
    name: 'NavItem',
    props: {
        to: {
            type: String,
            default: ''
        },
        exact: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
@import '../assets/styles/global.scss';
.link {
    padding: 10px;
    color: $color-link
}

.link:hover {
    text-decoration: none;
}
.nuxt-link-active {
    color: $color-link-active
}


</style>