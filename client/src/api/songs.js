import request from '@/utils/request'

export function fetchSongs() {
  return request({
    url: '/api/songs',
    method: 'get'
  })
}
