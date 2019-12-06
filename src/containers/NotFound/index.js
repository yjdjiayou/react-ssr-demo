import React, {Component} from 'react';

class NotFound extends Component {
    componentWillMount() {
        if (this.props.staticContext) {
            // 给静态路由的上下文添加一个 notFound = true 的键值对
            this.props.staticContext.notFound = true;
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-6">
                    你的页面飞了
                </div>
            </div>
        )
    }
}

export default NotFound;