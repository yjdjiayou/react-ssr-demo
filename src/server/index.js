import render from './render';
import proxy from 'express-http-proxy';
const express = require('express');

const app = express();

app.use(express.static('public'));

// 如果是服务器端请求数据，则直接访问 API 服务器的 4000 端口
// 如果是客户端请求数据，则要访问 node 服务器（中间层）的 3000 端口
// 让 node 服务器帮我们访问 API 服务器的 4000 端口请求数据
// 总结：客户端向 node 服务器请求数据，node 服务器转发给 API 服务器
// 如果浏览器不直接访问 API 接口服务器，那么就不存在跨域的问题，node 服务器访问 API 接口服务器不存在跨域问题
// 如果访问的路径是以 /api 开头的，会交给代理服务器处理
// /api/users => http://127.0.0.1:4000/api/users
app.use('/api', proxy('http://127.0.0.1:4000', {
    proxyReqPathResolver(req) {
        return `/api${req.url}`;
    }
}));

app.get('*', function (req, res) {
    render(req, res);
});

app.listen(3000, function () {
    console.log('server started at port 3000');
});