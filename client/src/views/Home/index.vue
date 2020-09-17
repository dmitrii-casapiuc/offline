<template>
  <div
    v-loading="loading"
    class="wrapper-home"
  >
    <div v-if="songSetData.length" class="wrapper-song-set-list">
      <SongSetList
        v-for="item in songSetData"
        :key="item.id"
        :item="item"
      />
    </div>
    <div v-if="showNoData">No data</div>
  </div>
</template>

<script>
import SongSetList from '@/components/SongSetList'
import { fetchSongSet } from '@/api/songs'

export default {
  name: 'Home',
  components: {
    SongSetList
  },
  metaInfo() {
    return {
      title: 'Home'
    }
  },
  data() {
    return {
      loading: true,
      songSetData: [],
      showNoData: false
    }
  },
  async created() {
    await this.getSongSet()
  },
  methods: {
    async getSongSet() {
      await fetchSongSet().then(response => {
        this.songSetData = response.data
        this.loading = false

        if (response.data.length === 0) {
          this.showNoData = true
        } else {
          this.showNoData = false
        }
      })
    }
  }
}
</script>
