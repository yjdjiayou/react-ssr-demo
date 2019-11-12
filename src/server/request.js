import axios from 'axios';

// 如果是服务器端请求数据，则直接访问 API 服务器的 4000 端口
// 如果是客户端请求数据，则要访问 node 服务器（中间层）的 3000 端口
// 让 node 服务器帮我们访问 API 服务器的 4000 端口请求数据

//创建一个 axios 的实例, 配置baseURL的基准路径
export default (req) => axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        cookie: req.get('cookie') || ''
    }
});
