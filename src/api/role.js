import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-element-admin/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/vue-element-admin/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/vue-element-admin/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete'
  })
}

export function deleteRol1(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: "delete"
  });
}
export function deleteRol5(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: "delete"
  });
}
export function deleteRol3(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: "delete"
  });
}
