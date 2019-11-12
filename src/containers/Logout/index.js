import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Logout extends Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-6">
                   <button
                   onClick={this.props.logout}
                    type="submit" className="btn btn-primary">退出</button>
                </div>
            </div>
        )
    }
}
Logout = connect(
    state=>state.session,
    actions
)(Logout);
export default Logout;