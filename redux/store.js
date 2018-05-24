/*
 * @Author: jianxi_lin 
 * @Date: 2018-05-24 16:44:59 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-24 17:23:22
 */
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers";
import promiseMiddleware from "./middleware/promiseMiddleware";

export const initStore = () => {
    return createStore(combineReducers, applyMiddleware(promiseMiddleware))
}