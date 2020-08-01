<template>
  <div class="wrapper-header">
    <div class="header">
      Header
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.wrapper-header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  align-items: center;

  .header {
    max-width: 1350px;
    margin: 0 auto;
  }
}
</style>
