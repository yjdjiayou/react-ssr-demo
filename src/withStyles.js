import React, {Component} from 'react';

// 服务端返回的 html 源码里，没有 style 标签
// 而在浏览器中的 html 源码里，有 style 标签，是通过 js 插入进去的
// 页面初始化的时候是没有样式的，后续通过 js 插入 css 样式，会发生闪烁/抖动
// 所以希望 css 样式能在服务端返回的时候，就把样式写进去

export default function withStyles(OriginalComponent, styles) {
    class ProxyComponent extends Component {
        componentWillMount() {
            if (this.props.staticContext) {
                // isomorphic-style-loader 这个 loader 会处理所有的样式文件
                // 每个样式文件会有一个 _getCss 属性，可以得到处理后的 css 源代码
                this.props.staticContext.cssArr.push(styles._getCss());
            }
        }

        render() {
            return <OriginalComponent {...this.props}/>
        }
    }

    return ProxyComponent;
}
