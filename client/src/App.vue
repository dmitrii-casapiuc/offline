<template>
  <Main>
    <router-view />
  </Main>
</template>

<script>
import Main from '@/layouts/Main'

export default {
  components: {
    Main
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  }
}
</script>
