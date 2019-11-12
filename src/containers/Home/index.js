import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
class Home extends Component{
    componentWillMount(){
        // 注意：这里访问的是客户端的仓库
        if(this.props.list.length == 0){
            this.props.getHomeList();
        }
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <ul className="list-group">
                        {
                            this.props.list.map(item=>(
                                <li key={item.id} className="list-group-item">{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
Home = connect(
    state=>state.home,
    actions
)(Home);
// 此方法是用来异步加载数据的方法，用这个方法可以加载数据并且放到仓库中去
Home.loadData = function(store){
  return store.dispatch(actions.getHomeList());
};
export default Home;