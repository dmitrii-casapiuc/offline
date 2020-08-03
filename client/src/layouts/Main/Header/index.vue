<template>
  <div class="wrapper-header">
    <div class="header">
      <el-menu
        :default-active="activeLink"
        :router="true"
        mode="horizontal"
      >
        <el-menu-item
          v-for="(route, index) in routes"
          :key="index"
          :index="route.path"
          :route="{ name: route.title }"
        >
          {{ route.title }}
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      routes: [
        { title: 'Home', path: '/', icon: 'el-icon-house' },
        { title: 'Songs', path: '/songs', icon: 'el-icon-headset' }
      ],
      activeLink: null
    }
  },
  watch: {
    $route(to, from) {
      this.activeLink = to.path
    }
  }
}
</script>

<style lang="scss">
.wrapper-header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  align-items: center;

  .header {
    max-width: 1350px;
    margin: 0 auto;

    .el-menu-item {
      height: 51px;
    }

    .el-menu {
      border-right: none;

      .el-menu-item {
        height: 51px;

        a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
