<template>
  <div class="wrapper-footer">
    <div class="footer">
      Footer
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.wrapper-footer {
  width: 100%;
  height: 50px;
  border-top: 1px solid #dcdfe6;
  display: flex;
  align-items: center;

  .footer {
    max-width: 1350px;
    margin: 0 auto;
  }
}
</style>
