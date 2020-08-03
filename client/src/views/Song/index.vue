<template>
  <div v-loading="loading" class="wrapper-song">
    <pre :data-key="song.tonality">
      {{ song.lyrics }}
    </pre>
  </div>
</template>

<script>
import $ from 'jquery'
import '@/utils/transposer'
import { fetchSong } from '@/api/songs'

export default {
  name: 'Song',
  data() {
    return {
      loading: true,
      song: []
    }
  },
  async created() {
    await this.getSong()
    $('pre').transpose()
  },
  methods: {
    async getSong() {
      this.loading = true
      await fetchSong(this.$route.params.id).then(response => {
        this.song = response.data
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
.my-trans {
  white-space: pre;
}

span.c {
  font-weight: bold;
  color: #2159D6;
}

.transpose-keys {
	margin: 10px 0;
	overflow: auto;
	font: normal 11px sans-serif;
}

.transpose-keys a {
	display: block;
	float: left;
	width: 2.25em;
	text-align: center;
	margin: 0 .25em .25em 0;
	color: #333;
	background: #eee;
	text-decoration: none;
	padding: .4em 0;
	border: solid 1px transparent;
	outline: none;
}

.transpose-keys a.selected {
  background: #2159D6;
  color: #FFF;
}
</style>
