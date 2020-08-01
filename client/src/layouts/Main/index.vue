<template>
  <div class="app-main-layout">
    <Header />

    <div class="app-wrapper">
      <main class="app-content">
        <div class="app-page">
          <router-view />
        </div>
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
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .app-wrapper {
    display: flex;
    flex-grow: 1;

    .app-content {
      padding: 50px 30px;
      width: 100%;
    }
  }
}
</style>
