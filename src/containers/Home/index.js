import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import actions from '../../store/actions/home';

class Home extends Component {

    componentWillMount() {
        console.log('Home 组件即将挂载');
        if (!this.props.list || !this.props.list.length) {
            this.props.getHomeList();
        }
    }

    // componentDidMount 在服务器端是不执行的
    componentDidMount() {
        console.log('你看我在服务端执不执行');
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>React-SSR</title>
                    <meta name="description" content="首页描述"/>
                </Helmet>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="list-group">
                            {
                                this.props.list.map(item => (
                                    <li key={item.id} className="list-group-item">{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

Home = connect(
    state => state.home,
    actions
)(Home);
// 此方法是用来异步加载数据的方法，用这个方法可以加载数据并且放到仓库中去
Home.loadData = function (store) {
    return store.dispatch(actions.getHomeList());
};
export default Home;