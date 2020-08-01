<template>
  <div class="app-main-layout">
    <Header />

    <div class="app-wrapper">
      <main class="app-content">
        <router-view />
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Main',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.app-main-layout {
  height: 100%;

  .app-wrapper {
    min-height: calc(100% - 102px);

    .app-content {
      max-width: 1350px;
      margin: 0 auto;
      padding: 40px 15px;
    }
  }
}
</style>
