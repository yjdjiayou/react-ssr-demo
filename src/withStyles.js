import React,{Component} from 'react';

export default function withStyles(OriginalComponent,styles){
    class ProxyComponent extends Component{
        componentWillMount(){
            if(this.props.staticContext){
              // _getCss方法可以得到处理后的 css 源代码
              this.props.staticContext.csses.push(styles._getCss());
            }
        }
        render(){
            return <OriginalComponent {...this.props}/>
        }
    }
    return ProxyComponent;
}