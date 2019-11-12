import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/counter';
class Home extends Component{
    render(){
        return (
            <div>
               <p>{this.props.number}</p>
               <button onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

Home = connect(
    state=>state.counter,
    actions
)(Home);
export default Home;