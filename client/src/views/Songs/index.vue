<template>
  <div
    class="wrapper-song-list"
  >
    <el-table
      v-loading="loading"
      class="song-list"
      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      @row-click="rowClicked"
    >
      <el-table-column
        label="Title"
        prop="title"
      />
      <el-table-column
        align="right"
      >
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            class="song-search"
            size="mini"
            placeholder="Type to search"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchSongs } from '@/api/songs'

export default {
  name: 'SongList',
  metaInfo() {
    return {
      title: 'Songs'
    }
  },
  data() {
    return {
      loading: true,
      search: '',
      tableData: []
    }
  },
  async created() {
    await this.getList()
  },
  methods: {
    async getList() {
      await fetchSongs().then(response => {
        this.tableData = response.data
        this.loading = false
      })
    },
    rowClicked(row) {
      this.$router.push(`/song/${row._id}`)
    }
  }
}
</script>

<style lang="scss">
.wrapper-song-list {
  .song-list {
    tbody tr {
      cursor: pointer;
    }

    .song-search {
      max-width: 300px;
    }
  }
}
</style>
