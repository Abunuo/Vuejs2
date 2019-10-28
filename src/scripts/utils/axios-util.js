/**
 * import axios from '../axios-util.js'
 *
 * axios({
 *      url: '/user',  // `url` 是用于请求的服务器 URL
 *      method: 'get', // `method` 是创建请求时使用的方法   默认 default  
 *      headers: {'X-Requested-With': 'XMLHttpRequest'},   // `headers` 是即将被发送的自定义请求头
 *      params: {ID: 12345},  // `params` 是即将与请求一起发送的 URL 参数  GET 请求
 *      data: {}  // `data` 是作为请求主体被发送的数据   只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
 *      responseType: 'json', // default   // `responseType` 表示服务器响应的数据类型 相当于 jsonType
 * })
 */

import Axios from 'axios';

let baseURL = ''
if(process.env.NODE_ENV === 'development') {
    baseURL = 'https://m.modian.com';
} else if(process.env.NODE_ENV === 'production'){
    baseURL = '';
}

const axios = Axios.create({
    baseURL,
    timeout: 2500
});

// 请求体预处理
axios.interceptors.request.use(config => {
    // 可以对请求的 headers 等修改
    
    // if(window.localStorage.getItem('MDUSERTOKEN')) {
    //     config.headers.token = window.localStorage.getItem('MDUSERTOKEN')
    // }
    
    return config;
}, error => {
    return Promise.reject(error)
})

// 请求返回信息处理
axios.interceptors.response.use(response => {
    // 可以对请求返回的data修改，提前处理返回的 status 等
    return response.data;
}, error => {
    return Promise.reject(error);
});

export const post = (url, data = {}) => {
    return axios({
        url,
        method: 'post',
        data,
    })
}

export const get = (url, params = {}) => {
    return axios({
        url,
        method: 'get',
        params
    })
}

export default axios;