import { baseUrl } from '@/utils/global'

export default {
    method: 'get',
    baseUrl: baseUrl, // 基础url前缀
    // 请求头信息
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    data: {},              // 参数
    timeout: 10000,        // 设置超时时间
    withCredentials: true, // 携带凭证
    responseType: 'json'   // 返回数据类型
}