import request from '@/utils/request'

export function login(data) {
  return request({
    //url: '/vue-admin-template/user/login',
    url: '/api/v2/auth/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    //url: '/vue-admin-template/user/info',
    url: '/admin/users/show',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    // url: '/vue-element-admin/user/logout',
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
