import axios from '../axios'

export const save = (data) => {
    return axios({url: '/user/save', method: 'post', data});
}

export const batchDelete = (data) => {
    return axios({url: '/user/delete', method: 'post', data});
}

export const findPage = (data) => {
    return axios({url: '/user/findPage', method: 'post', data});
}

export const findPermissions = (params) => {
    return axios({url: '/user/findPermissions', method: 'get', params});
}