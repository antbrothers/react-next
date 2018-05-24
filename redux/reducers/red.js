/*
 * @Author: jianxi_lin 
 * @Date: 2018-05-24 16:40:38 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-24 17:33:22
 */
import { RED_REQUEST, RED_SUCCESS, RED_FAIL } from '../actions/red'
let initState = {
    code: 0,
    message: '',   
    data: {        
    } 
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case RED_SUCCESS:
            return {
                code: action.result.data.code,
                message: action.result.data.data.hot,
                data: action.result.data.data
            };
        case RED_FAIL: {
            return {
                code: action.result.data.code,
                message: action.result.data.message,
                data: action.result.data.data
            }
        };
        default:
            return state;
    }
}
