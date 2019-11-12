import * as types from '../action-types';

export default {
    getHomeList() {
        // 这里使用 redux-thunk 中间件
        return function (dispatch, getState, request) {
            // 如果是服务器端请求数据，则直接访问 API 服务器的 4000 端口
            // 如果是客户端请求数据，则要访问 node 服务器（中间层）的 3000 端口
            // 让 node 服务器帮我们访问 API 服务器的 4000 端口请求数据

            // 因为这里的 action 都是公共的，客户端/服务端的请求参数可能不一样
            // 所以需要在这里区分当前环境是客户端还是服务端，但是再每个 action 里都做判断会很麻烦
            // 所以这里在不同环境下调用时，给函数传递一个 request ，就可以区分当前环境
            return request.get('/api/users').then(function (result) {
                let list = result.data;
                dispatch({
                    type: types.SET_HOME_LIST,
                    payload: list
                });
            });
        }
    }
}