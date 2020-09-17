<template>
  <div
    v-if="item.status"
    class="song-set-list"
  >
    <h3>{{ item.title }}</h3>
    <el-table
      :data="item.sets"
      style="width: 100%"
      @row-click="rowClicked"
    >
      <el-table-column
        label="Title"
        prop="title"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'SongSetList',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          sets: Array,
          status: Boolean,
          title: String,
          id: String
        }
      }
    }
  },
  methods: {
    rowClicked(row) {
      this.$router.push(`/song/${row.id}`)
    }
  }
}
</script>

<style lang="scss">
.song-set-list {
  margin-bottom: 30px;

  h3 {
    color: #1f2f3d;
    font-size: 22px;
    font-weight: 400;
    margin: 0;
    text-align: center;
  }

  table tbody tr {
    cursor: pointer;
  }
}
</style>
