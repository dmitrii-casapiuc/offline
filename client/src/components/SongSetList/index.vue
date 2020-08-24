<template>
  <div
    v-if="item.status"
    class="song-set-list"
  >
    <h3>{{ item.title }}</h3>
    <el-table
      :data="item.songIds"
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
          songIds: Array,
          status: Boolean,
          title: String,
          _id: String
        }
      }
    }
  },
  methods: {
    rowClicked(row) {
      this.$router.push(`/song/${row._id}`)
    }
  }
}
</script>

<style lang="scss">
.song-set-list {
  table tbody tr {
    cursor: pointer;
  }
}
</style>
