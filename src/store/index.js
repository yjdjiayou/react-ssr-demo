import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import clientRequest from '../client/request';
import createServerRequest from '../server/request';
import reducers from './reducers';

export function getServerStore(req) {
    // withExtraArgument 用来给 thunk 传递额外的参数
    return createStore(reducers, applyMiddleware(thunk.withExtraArgument(createServerRequest(req)), logger));
}

export function getClientStore() {
    // 服务端：组件初始化时会请求数据，请求的数据会存到服务端仓库中，然后组件使用数据显示相应内容
    // 客户端：为了避免组件挂载时又一次的请求数据（当服务器端已经请求过数据并返回了有数据的内容）
    // 取出服务端存到 window 中的仓库数据并作为初始值存到客户端仓库中
    // 俗称：数据的注水
    let initState = window.context.state;
    return createStore(reducers, initState, applyMiddleware(thunk.withExtraArgument(clientRequest), logger));
}