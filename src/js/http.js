import axios from 'axios'
import qs from 'qs'
import bus from './bus';
import router from '../router';

const baseUrl = '/'

console.log(baseUrl)

let loading = false

// 创建axios实例
const service = axios.create({
	baseURL: baseUrl, // api的base_url
	timeout: 30000, // 请求超时时间
	responseType: "json",
	withCredentials: true, // 是否允许带cookie
	headers: {
		// "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
		'X-Requested-With': 'XMLHttpRequest',
	}
})
// request拦截器
service.interceptors.request.use(
	config => {
		if (!config.hideLoading) {
      loading = true
			bus.$loading.show()
		}
		if (config.method !== "get") {
			// // 将json对象转换成name,value格式
			config.data = qs.stringify(config.data);
		}
		// config.headers['Content-Type'] = config.headers['Content-Type'] ? config.headers['Content-Type'] : 'application/x-www-form-urlencoded';
		return config
	},
	error => {
		loading && bus.$loading.hide();
		// Do something with request error
		console.log(error) // for debug
		Promise.reject(error)
	}
)

// respone拦截器
service.interceptors.response.use(
	response => {
		/**
		 * code为非20000是抛错 可结合自己业务进行修改
		 */
		loading && bus.$loading.hide();
		const res = response.data
		if (res.code !== 1000) {
			if (res.code === 1004) { //这里可以做一些登录的拦截
				router.push({name: 'login'})
			}
			return Promise.reject(res)
		} else {
			return  Promise.resolve(res)
		}
	},
	error => {
		loading && bus.$loading.hide();
		console.log('err' + error) // for debug
		return Promise.reject(error)
	}
)

export default service
