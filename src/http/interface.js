import axios from './api' // 倒入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独导出
export const test = params => {
    return axios({
        url: '/users/token',
        method: 'get',
        params
    })
}
  
export const login = data => {
    return axios({
        url: '/users/login',
        method: 'post',
        data
    })
}

export const register = data => {
    return axios({
        url: '/users/register',
        method: 'post',
        data
    })
}

export const uploadImg = data => {
    return axios({
        url: '/upload/single',
        method: 'post',
        data
    })
}

export const fetchArticle = params => {
    return axios({
        url: '/article',
        method: 'get',
        params
    })
}
export const fetchArticleList = params => {
    return axios({
        url: '/article/typeList',
        method: 'get',
        params
    })
}
export const editArticle = data => {
    return axios({
        url: '/article/edit',
        method: 'post',
        data
    })
}
export const filterArticleList = params => {
    return axios({
        url: '/article/type',
        method: 'get',
        params
    })
}
export const addArticle = data => {
    return axios({
        url: '/users/addArticle',
        method: 'post',
        data
    })
}

export const detailArticle = params => {
    return axios({
        url: '/article/detail',
        method: 'get',
        params
    })
}

export const delectlArticle = params => {
    return axios({
        url: '/article/delect',
        method: 'get',
        params
    })
}
// 默认全部倒出
// 根绝需要进行  
export default {
    test,
    login,
    register,
    uploadImg,
    fetchArticle,
    addArticle,
    detailArticle,
    fetchArticleList,
    filterArticleList,
    editArticle,
    delectlArticle
}
