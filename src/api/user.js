// import request from '@/utils/request'
import { request } from '@/utils/request2'

export function login(data) {
  return request({
    // url: '/vue-element-admin/user/login', // mock data url
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    // url: '/vue-element-admin/user/info',
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
