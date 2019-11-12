import React,{Component} from 'react';
class NotFound extends Component{
    componentWillMount(){
        if(this.props.staticContext){
            this.props.staticContext.notFound = true;
        }
    }
    render(){
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