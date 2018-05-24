/*
 * @Author: jianxi_lin 
 * @Date: 2018-05-24 16:40:10 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-24 17:24:27
 */

export const RED_REQUEST = 'red/RED_REQUEST';
export const RED_SUCCESS = 'red/RED_SUCCESS';
export const RED_FAIL = 'red/RED_FAIL';

export function red(userInfo) {
    var params = new URLSearchParams()
    params.append('mobile', userInfo)
    params.append('url', userInfo)
    return {
        types: [RED_REQUEST, RED_SUCCESS, RED_FAIL],
        promise: client => client.get(`http://114.67.143.209:3002/api/getRed`, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'               
            }
        })
    }
}