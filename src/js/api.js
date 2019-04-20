/* global fetch */
import http from './http';

const domain = process.env.NODE_ENV === 'production' ? 'https://m.allpyra.com/' : 'https://m.allpyra.com/'
const baseUrl = ''

export const Api = domain
export const importCompanyUrl = domain + baseUrl + 'company/import'
export const importJobUrl = domain + baseUrl + 'employ/import'
export const qiniuDomain = ''


export function getHotSearch(data) {
	return http({
		url: baseUrl + 'b2c-product/api/item/hotSearch',
		method: 'get',
		params: data,
	})
}






