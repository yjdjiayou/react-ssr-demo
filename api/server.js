let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();

// 如果浏览器不直接访问 API 接口服务器，那么就不存在跨域的问题，node 服务器访问 API 接口服务器不存在跨域问题

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'react-test'
}));

let users = [{id: 1, name: 'user1'}, {id: 2, name: 'user2'}];
app.get('/api/users', function (req, res) {
    res.json(users);
});

app.post('/api/login', function (req, res) {
    let user = req.body;
    req.session.user = user;
    res.json({
        code: 0,
        data: {
            user,
            success: '登录成功!'
        }
    });
});

app.get('/api/logout', function (req, res) {
    req.session.user = null;
    res.json({
        code: 0,
        data: {
            success: '退出成功!'
        }
    });
});

app.get('/api/user', function (req, res) {
    let user = req.session.user;
    if (user) {
        res.json({
            code: 0,
            data: {
                success: '获取用户信息成功!',
                user
            }
        });
    } else {
        res.json({
            code: 1,
            data: {
                error: '用户未登录!'
            }
        });
    }
});

app.listen(4000);