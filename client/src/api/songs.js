import request from '@/utils/request'

export function fetchSongs() {
  return request({
    url: '/api/songs',
    method: 'get'
  })
}

export function fetchSong(id) {
  return request({
    url: `/api/songs/${id}`,
    method: 'get'
  })
}
