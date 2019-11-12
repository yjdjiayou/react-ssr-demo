import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import Home from './containers/Home';
import Counter from './containers/Counter';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';
import App from './containers/App';

// 集中式路由
export default [
    {
        path: '/',
        component: App,
        loadData: App.loadData,
        // 子路由
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
                key: '/',
                // 加载数据，如果此配置项有了这个属性，那么意味着需要加载异步数据
                loadData: Home.loadData
            },
            {
                path: '/counter',
                component: Counter,
                key: '/counter'
            },
            {
                path: '/login',
                component: Login,
                key: '/login'
            },
            {
                path: '/logout',
                component: Logout,
                key: '/logout'
            },
            {
                path: '/profile',
                component: Profile,
                key: '/profile'
            },
            {
                component: NotFound,
                key: '/notfound'
            }
        ]
    }
]
