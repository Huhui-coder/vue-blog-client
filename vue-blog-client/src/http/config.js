export default {
    method: 'post',
    // 基础url前缀
    baseURL: 'http://localhost:3000',
    //文件请求地址
    fileURL: 'http://localhost:3000',
    // 请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: false,
    // 返回数据类型
    responseType: 'json'
}